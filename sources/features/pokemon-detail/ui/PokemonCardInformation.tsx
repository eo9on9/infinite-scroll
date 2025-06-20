import styles from './PokemonCardInformation.module.css'

interface PokemonCardInformationProps {
  types: string[]
  height: number
  weight: number
}

export const PokemonCardInformation = ({
  types,
  height,
  weight,
}: PokemonCardInformationProps) => {
  return (
    <div className={styles.wrap}>
      <dl>
        <dt>Types</dt>
        <dd>
          <div className={styles.types}>
            {types.map(type => (
              <span key={type}>{type}</span>
            ))}
          </div>
        </dd>
      </dl>
      <dl>
        <dt>Height</dt>
        <dd>{height}m</dd>
      </dl>
      <dl>
        <dt>Weight</dt>
        <dd>{weight}kg</dd>
      </dl>
    </div>
  )
}
