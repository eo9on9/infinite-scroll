'use client'

import { Generation } from '@/src/shared/types'
import { usePreviousPath } from '../../shared/hooks/usePreviousPath'
import { PokemonList } from '../../widgets/pokemon-list/PokemonList'
import styles from './PokemonListPage.module.css'

interface Props {
  params: {
    gen: string
  }
}

const TITLE_MAP: Record<Generation, string> = {
  1: '1st',
  2: '2nd',
  3: '3rd',
  4: '4th',
  5: '5th',
}

export const PokemonListPage = ({ params }: Props) => {
  const gen = Number(params.gen) as Generation

  const previousPath = usePreviousPath()

  console.log(previousPath)

  return (
    <div className={styles.page}>
      <h2>{TITLE_MAP[gen]} Generation</h2>
      <PokemonList gen={gen} />
    </div>
  )
}
