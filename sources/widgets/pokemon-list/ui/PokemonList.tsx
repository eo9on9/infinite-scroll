'use client'

import { getPokemonList } from '@/sources/entities/pokemon/api/getPokemonList'
import { PokemonSummary } from '@/sources/entities/pokemon/model/types/PokemonSummary'
import { PokemonListItem } from '@/sources/features/pokemon-list/ui/PokemonListItem'
import { Generation, GENERATION_ORDER_RANGE } from '@/sources/shared/constants'
import { usePreviousPath } from '@/sources/shared/contexts/usePreviousPath'
import { IntersectionDetector } from '@/sources/shared/ui/IntersectionDetector'
import { useCallback, useEffect, useRef, useState } from 'react'
import styles from './PokemonList.module.css'

interface PokemonListProps {
  gen: Generation
}

const STEP = 20

export const PokemonList = ({ gen }: PokemonListProps) => {
  const previousPath = usePreviousPath()

  const [list, setList] = useState<PokemonSummary[]>(
    previousPath?.includes('/detail')
      ? JSON.parse(sessionStorage.getItem('list') ?? '[]')
      : [],
  )

  const isLoading = useRef(false)

  const page = useRef(0)

  const [startIndex, endIndex] = GENERATION_ORDER_RANGE[gen].map(v => v - 1)

  const fetchPokemonList = useCallback(async () => {
    try {
      if (isLoading.current) return

      const offset = startIndex + list.length
      const limit = offset + STEP > endIndex ? endIndex - offset + 1 : STEP

      if (offset > endIndex) return

      isLoading.current = true

      const data = await getPokemonList({ offset, limit })

      page.current += 1

      setList(p => [...p, ...data])
    } catch (e) {
      console.error(e)
    } finally {
      isLoading.current = false
    }
  }, [startIndex, endIndex, list])

  useEffect(() => {
    sessionStorage.setItem('list', JSON.stringify(list))
  }, [list])

  return (
    <>
      <div className={styles.wrap}>
        {list.map((item, index) => (
          <PokemonListItem
            key={item.name}
            order={index + startIndex + 1}
            name={item.name}
            url={item.url}
          />
        ))}
      </div>
      <IntersectionDetector onDetect={fetchPokemonList} />
    </>
  )
}
