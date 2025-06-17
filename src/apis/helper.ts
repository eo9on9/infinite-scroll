import axios, { AxiosRequestConfig, Method } from 'axios'

const BASE_URL = 'https://pokeapi.co/api/v2'

const pokemonApiInstance = axios.create({ baseURL: BASE_URL })

const request =
  (method: Method) =>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  <T = any>(url: string, config?: AxiosRequestConfig<any>) =>
    pokemonApiInstance<T>(url, {
      method,
      ...config,
    })

export const pokemonApi = {
  get: request('GET'),
  post: request('POST'),
}
