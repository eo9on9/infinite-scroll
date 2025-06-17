import { PokemonSummary } from '../models/PokemonSummary'
import { pokemonApi } from './helper'

interface GetPokemonListParams {
  offset: number
  limit: number
}

interface GetPokemonListResponse {
  results: PokemonSummary[]
}

export const getPokemonList = async (params: GetPokemonListParams) => {
  const response = await pokemonApi.get<GetPokemonListResponse>(`/pokemon`, {
    params,
  })

  return response?.data.results
}
