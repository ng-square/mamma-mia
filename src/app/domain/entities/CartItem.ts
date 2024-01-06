import { useModelFactory, Immutable } from 'src/app/lib/useModelFactory';

import { Pizza, usePizzaDefaults } from './Pizza';

/**
 * DOMAIN MODEL
 * --------------------------------
 */
export type CartItem = Immutable<{
  pizza: Pizza;
  amount: number;
}>;

/**
 * DOMAIN MODEL - DEFAULTS
 * --------------------------------
 */
export const useCartItemDefaults = (): CartItem => ({
  pizza: usePizzaDefaults(),
  amount: 0,
});

/**
 * DOMAIN MODEL - CONSTRUCTOR
 * --------------------------------
 */
export const createCartItem = useModelFactory<CartItem>({
  defaults: useCartItemDefaults,
});

/**
 * DOMAIN MODEL - METHODS
 * --------------------------------
 */
export function calculatePrice(item: CartItem): number {
  return item.pizza.price * item.amount;
}
