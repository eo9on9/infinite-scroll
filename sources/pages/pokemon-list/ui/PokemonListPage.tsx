import { Generation, GENERATION } from '@/sources/shared/constants'
import { PokemonList } from '@/sources/widgets/pokemon-list/ui/PokemonList'
import { notFound } from 'next/navigation'
import { use } from 'react'
import styles from './PokemonListPage.module.css'

interface Props {
  params: Promise<{ gen: string }>
}

const TITLE_MAP: Record<Generation, string> = {
  1: '1st',
  2: '2nd',
  3: '3rd',
  4: '4th',
  5: '5th',
}

export const PokemonListPage = ({ params }: Props) => {
  const { gen: _gen } = use(params)

  const gen = Number(_gen) as Generation

  if (!GENERATION.includes(gen)) notFound()

  return (
    <div className={styles.page}>
      <h2>{TITLE_MAP[gen]} Generation</h2>
      <PokemonList gen={gen} />
    </div>
  )
}
