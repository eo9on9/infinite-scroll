import Image from 'next/image'

import { getPokemon } from '@/sources/entities/pokemon/api/getPokemon'
import styles from './PokemonDetailCard.module.css'

interface Props {
  order: number
}

export const PokemonDetailCard = async ({ order }: Props) => {
  // const [pokemon, setPokemon] = useState<Pokemon>()

  // const fetchPokemon = useCallback(async () => {
  //   try {
  //     const data = await getPokemon({ order })

  //     setPokemon(data)
  //   } catch (e) {
  //     console.error(e)
  //   }
  // }, [order])

  // useEffect(() => {
  //   fetchPokemon()
  // }, [fetchPokemon])

  const pokemon = await getPokemon({ order })

  return (
    <div className={styles.card}>
      {pokemon ? (
        <>
          <div className={styles.title}>
            <span>{`#${order.toString().padStart(3, '0')}`}</span>
            <span>{pokemon.name?.toUpperCase()}</span>
          </div>
          <div className={styles.front}>
            <Image
              src={pokemon.sprites?.front_default}
              width={160}
              height={160}
              alt={pokemon.name}
              priority
            />
          </div>
          <div className={styles.info}>
            <dl className={styles.infoType}>
              <dt>Types</dt>
              <dd>
                {pokemon.types.map(t => (
                  <span key={t.type.name}>{t.type.name}</span>
                ))}
              </dd>
            </dl>
            <dl>
              <dt>Height</dt>
              <dd>{pokemon.height}m</dd>
            </dl>
            <dl>
              <dt>Weight</dt>
              <dd>{pokemon.weight}kg</dd>
            </dl>
          </div>
        </>
      ) : null}
    </div>
  )
}
