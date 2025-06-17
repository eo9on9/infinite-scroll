'use client'

import { Gen } from '@/src/types'
import { usePreviousPath } from '../hooks/usePreviousPath'
import { PokemonList } from './PokemonList'
import styles from './PokemonListPage.module.css'

interface Props {
  params: {
    gen: string
  }
}

const TITLE_MAP: Record<Gen, string> = {
  1: '1st',
  2: '2nd',
  3: '3rd',
  4: '4th',
  5: '5th',
}

export const PokemonListPage = ({ params }: Props) => {
  const gen = Number(params.gen) as Gen

  const previousPath = usePreviousPath()

  console.log(previousPath)

  return (
    <div className={styles.page}>
      <h2>{TITLE_MAP[gen]} Generation</h2>
      <PokemonList gen={gen} />
    </div>
  )
}
