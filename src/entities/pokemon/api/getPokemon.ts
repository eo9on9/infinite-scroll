import { pokemonApi } from '@/src/shared/api/helper'
import { Pokemon } from '../model/Pokemon'

interface GetPokemonParams {
  order: number
}

type GetPokemonResponse = Pokemon

export const getPokemon = async ({ order }: GetPokemonParams) => {
  const response = await pokemonApi.get<GetPokemonResponse>(`/pokemon/${order}`)

  return response?.data
}
