export interface Pokemon {
  name: string
  height: number
  weight: number
  types: Array<{ type: { name: string } }>
  sprites: { front_default: string }
}
