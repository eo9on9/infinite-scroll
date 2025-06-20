export const GENERATION = [1, 2, 3, 4, 5] as const

export type Generation = (typeof GENERATION)[number]

export const GENERATION_ORDER_RANGE = {
  1: [1, 151],
  2: [152, 251],
  3: [252, 386],
  4: [387, 493],
  5: [494, 649],
} as const

export const GENERATION_TEXT: Record<Generation, string> = {
  1: '1st',
  2: '2nd',
  3: '3rd',
  4: '4th',
  5: '5th',
} as const
