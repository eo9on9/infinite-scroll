import { pokemonApi } from '@/sources/shared/api/helper'
import { PokemonSummary } from '../model/types/PokemonSummary'

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
