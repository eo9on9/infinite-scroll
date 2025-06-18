import { PokemonSummary } from '@/src/entities/pokemon/model/PokemonSummary'
import { useRouter } from 'next/navigation'
import styles from './PokemonListItem.module.css'

interface PokemonListItemProps extends PokemonSummary {
  index: number
}

export const PokemonListItem = ({ index: _index, name: _name }: PokemonListItemProps) => {
  const router = useRouter()

  const index = `#${_index.toString().padStart(3, '0')}`
  const name = _name.toUpperCase()

  const handleClick = () => {
    router.push(`/detail/${_index}`)
  }

  return (
    <div className={styles.item} onClick={handleClick}>
      <div className={styles.itemIndex}>{index}</div>
      <div className={styles.itemName}>{name}</div>
    </div>
  )
}
