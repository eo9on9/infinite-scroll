import { PokemonDetailCard } from './PokemonDetailCard'

import styles from './PokemonDetailPage.module.css'

interface Props {
  params: {
    id: string
  }
}

export const PokemonDetailPage = async ({ params }: Props) => {
  return (
    <div className={styles.page}>
      {await PokemonDetailCard({ order: Number.parseInt(params.id) })}
    </div>
  )
}
