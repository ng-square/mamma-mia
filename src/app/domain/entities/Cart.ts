import {
  produce,
  useModelFactory,
  Immutable,
} from 'src/app/lib/useModelFactory';

import { calculatePrice, CartItem, createCartItem } from './CartItem';
import { MaxShoppingCartItemAmountError } from './error/MaxShoppingCartItemAmountError';
import { arePizzasEqual, Pizza } from './Pizza';

/**
 * DOMAIN MODEL
 * --------------------------------
 */
export type Cart = Immutable<{
  items: CartItem[];
}>;

/**
 * DOMAIN MODEL - DEFAULTS
 * --------------------------------
 */
export const useCartDefaults = (): Cart => ({
  items: [],
});

/**
 * DOMAIN MODEL - CONSTRUCTOR
 * --------------------------------
 */
export const createCart = useModelFactory<Cart>({
  defaults: useCartDefaults,
});

/**
 * DOMAIN MODEL - METHODS
 * --------------------------------
 */
export function addPizza(cart: Cart, pizza: Pizza): Cart {
  return produce(cart, (draft) => {
    const index = findIndex(draft, pizza);

    if (index < 0) {
      draft.items.push(createCartItem({ pizza, amount: 1 }));
      return;
    }

    const { amount } = draft.items[index];
    const newAmount = amount + 1;

    if (newAmount > 10) {
      throw new MaxShoppingCartItemAmountError();
    }

    draft.items[index] = createCartItem({ pizza, amount: newAmount });
  });
}

export function removePizza(cart: Cart, pizza: Pizza): Cart {
  return produce(cart, (draft) => {
    const index = findIndex(draft, pizza);

    if (index < 0) {
      return;
    }

    const { amount } = draft.items[index];
    const newAmount = amount - 1;

    if (newAmount < 0) {
      draft.items.splice(index, 1);
    } else {
      draft.items[index] = createCartItem({ pizza, amount: newAmount });
    }
  });
}

export function calculateTotal(cart: Cart): number {
  return cart.items.reduce((total, item) => (total += calculatePrice(item)), 0);
}

export function countItems(cart: Cart): number {
  return cart.items.reduce((total, item) => (total += item.amount), 0);
}

function findIndex(cart: Cart, pizza: Pizza): number {
  return cart.items.findIndex((item) => arePizzasEqual(item.pizza, pizza));
}
