import {
  Generation,
  GENERATION,
  GENERATION_TEXT,
} from '@/sources/shared/constants'
import { PokemonList } from '@/sources/widgets/pokemon-list/ui/PokemonList'
import { notFound } from 'next/navigation'
import { use } from 'react'
import styles from './PokemonListPage.module.css'

interface Props {
  params: Promise<{ gen: string }>
}

export const PokemonListPage = ({ params }: Props) => {
  const { gen: _gen } = use(params)

  const gen = Number(_gen) as Generation

  if (!GENERATION.includes(gen)) notFound()

  return (
    <div className={styles.page}>
      <h2>{GENERATION_TEXT[gen]} Generation</h2>
      <PokemonList gen={gen} />
    </div>
  )
}
