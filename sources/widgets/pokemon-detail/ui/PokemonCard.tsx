import { getPokemon } from '@/sources/entities/pokemon/api/getPokemon'
import { PokemonCardImage } from '@/sources/features/pokemon-detail/ui/PokemonCardImage'
import { PokemonCardInformation } from '@/sources/features/pokemon-detail/ui/PokemonCardInformation'
import styles from './PokemonCard.module.css'

interface Props {
  order: number
}

export const PokemonCard = async ({ order }: Props) => {
  const pokemon = await getPokemon({ order })

  return (
    <div className={`${styles.wrap} glass`}>
      <div className={styles.title}>
        <span>{`#${order.toString().padStart(3, '0')}`}</span>
        <span>{pokemon.name.toUpperCase()}</span>
      </div>
      <PokemonCardImage
        url={pokemon.sprites.front_default}
        name={pokemon.name}
      />
      <PokemonCardInformation
        types={pokemon.types.map(t => t.type.name)}
        height={pokemon.height}
        weight={pokemon.weight}
      />
    </div>
  )
}
