'use client'

import { PokemonDetailCard } from './PokemonDetailCard'

import styles from './PokemonDetailPage.module.css'

interface Props {
  params: {
    id: string
  }
}

export const PokemonDetailPage = ({ params }: Props) => {
  return (
    <div className={styles.page}>
      <PokemonDetailCard order={Number.parseInt(params.id)} />
    </div>
  )
}
