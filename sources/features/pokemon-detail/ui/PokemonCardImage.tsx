import Image from 'next/image'
import styles from './PokemonCardImage.module.css'

interface PokemonCardImageProps {
  name: string
  url: string
}

export const PokemonCardImage = ({ name, url }: PokemonCardImageProps) => {
  return (
    <div className={`${styles.wrap} glass`}>
      <Image src={url} width={160} height={160} alt={name} priority />
    </div>
  )
}
