import { Pokemon } from '../models/Pokemon'
import { pokemonApi } from './helper'

interface GetPokemonParams {
  order: number
}

type GetPokemonResponse = Pokemon

export const getPokemon = async ({ order }: GetPokemonParams) => {
  const response = await pokemonApi.get<GetPokemonResponse>(`/pokemon/${order}`)

  return response?.data
}
