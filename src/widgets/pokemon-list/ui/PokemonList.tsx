import { getPokemonList } from '@/src/entities/pokemon/api/getPokemonList'
import { PokemonSummary } from '@/src/entities/pokemon/model/PokemonSummary'
import { PokemonListItem } from '@/src/features/pokemon-list/ui/PokemonListItem'
import { Generation, GENERATION_ORDER_RANGE } from '@/src/shared/constants'
import { usePreviousPath } from '@/src/shared/hooks/usePreviousPath'
import { IntersectionDetector } from '@/src/shared/ui/IntersectionDetector'
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
      ? JSON.parse(sessionStorage.getItem('abc') ?? '[]')
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
    sessionStorage.setItem('abc', JSON.stringify(list))
  }, [list])

  return (
    <>
      <div className={styles.list}>
        {list.map((item, index) => (
          <PokemonListItem
            key={item.name}
            index={index + startIndex + 1}
            name={item.name}
            url={item.url}
          />
        ))}
      </div>
      <IntersectionDetector onDetect={fetchPokemonList} />
    </>
  )
}
