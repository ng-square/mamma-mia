import { useModelFactory, Immutable } from '@lib';

/**
 * DOMAIN MODEL
 * --------------------------------
 */
export type Pizza = Immutable<{
  name: string;
  description: string;
  price: number;
  image: string;
}>;

/**
 * DOMAIN MODEL - DEFAULTS
 * --------------------------------
 */
export const usePizzaDefaults = (): Pizza => ({
  name: '',
  description: '',
  price: 0,
  image: '',
});

/**
 * DOMAIN MODEL - CONSTRUCTOR
 * --------------------------------
 */
export const createPizza = useModelFactory<Pizza>({
  defaults: usePizzaDefaults,
});

/**
 * DOMAIN MODEL - METHODS
 * --------------------------------
 */
export function arePizzasEqual(pizza: Pizza, other: Pizza) {
  return pizza.name === other.name;
}
