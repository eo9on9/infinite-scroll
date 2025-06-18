import { PokemonDetailCard } from '@/src/widgets/pokemon-detail/ui/PokemonDetailCard'
import styles from './PokemonDetailPage.module.css'

interface Props {
  params: Promise<{ order: string }>
}

export const PokemonDetailPage = async ({ params }: Props) => {
  const { order } = await params

  return (
    <div className={styles.page}>{await PokemonDetailCard({ order: Number.parseInt(order) })}</div>
  )
}
