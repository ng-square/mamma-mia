import { useModelFactory, Immutable } from 'src/app/lib/useModelFactory'

/**
 * DOMAIN MODEL
 * --------------------------------
 */
export type Pizza = Immutable<{
  id: number
  name: string
  description: string
  price: number
  image: string
}>

/**
 * DOMAIN MODEL - DEFAULTS
 * --------------------------------
 */
export const usePizzaDefaults = (): Pizza => ({
  id: 0,
  name: '',
  description: '',
  price: 0,
  image: '',
})

/**
 * DOMAIN MODEL - CONSTRUCTOR
 * --------------------------------
 */
export const createPizza = useModelFactory<Pizza>({
  defaults: usePizzaDefaults,
})

/**
 * DOMAIN MODEL - METHODS
 * --------------------------------
 */
export function arePizzasEqual(pizza: Pizza, other: Pizza) {
  return pizza.id === other.id
}
