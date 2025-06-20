import { PokemonSummary } from '@/sources/entities/pokemon/model/types/PokemonSummary'
import { toCode, toName } from '@/sources/shared/lib/utils/format'
import { useRouter } from 'next/navigation'
import styles from './PokemonListItem.module.css'

interface PokemonListItemProps extends PokemonSummary {
  order: number
}

export const PokemonListItem = ({ order, name }: PokemonListItemProps) => {
  const router = useRouter()

  const handleClick = () => {
    router.push(`/detail/${order}`)
  }

  return (
    <div className={`${styles.item} glass`} onClick={handleClick}>
      <div className={styles.itemCode}>{toCode(order)}</div>
      <div className={styles.itemName}>{toName(name)}</div>
    </div>
  )
}
