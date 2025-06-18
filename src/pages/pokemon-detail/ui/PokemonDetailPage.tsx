import { PokemonDetailCard } from '@/src/widgets/pokemon-detail/ui/PokemonDetailCard'
import styles from './PokemonDetailPage.module.css'

interface Props {
  params: {
    order: string
  }
}

export const PokemonDetailPage = async ({ params }: Props) => {
  return (
    <div className={styles.page}>
      {await PokemonDetailCard({ order: Number.parseInt(params.order) })}
    </div>
  )
}
