import { pokemonApi } from '@/sources/shared/api/helper'
import { Pokemon } from '../model/types/Pokemon'

interface GetPokemonParams {
  order: number
}

type GetPokemonResponse = Pokemon

export const getPokemon = async ({ order }: GetPokemonParams) => {
  const response = await pokemonApi.get<GetPokemonResponse>(`/pokemon/${order}`)

  return response?.data
}
