import { GENERATION_ORDER_RANGE } from '@/src/shared/constants'
import { PokemonDetailCard } from '@/src/widgets/pokemon-detail/ui/PokemonDetailCard'
import { notFound } from 'next/navigation'
import styles from './PokemonDetailPage.module.css'

interface Props {
  params: Promise<{ order: string }>
}

export const PokemonDetailPage = async ({ params }: Props) => {
  const { order: _order } = await params

  const order = Number.parseInt(_order)

  const isValidOrder = (order: number) =>
    Object.values(GENERATION_ORDER_RANGE).some(
      ([start, end]) => order >= start && order <= end,
    )

  if (!isValidOrder(order)) notFound()

  return <div className={styles.page}>{await PokemonDetailCard({ order })}</div>
}
