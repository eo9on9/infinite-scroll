export const toCode = (order: number) => `#${order.toString().padStart(3, '0')}`

export const toName = (name: string) => name.toUpperCase()
