import { Result, UseCase } from '@lib'
import { Pizza } from '../entities/Pizza'
import { createCart, removePizza } from '../entities/Cart'
import { CartItem } from '../entities/CartItem'

interface Context {
  pizza: Pizza
  items: CartItem[]
}

export class CartRemovePizzaUseCase implements UseCase<Context, CartItem[]> {
  async execute({
    items,
    pizza,
  }: Context): Promise<Result<CartItem[], string>> {
    try {
      const cart = createCart({ items })
      const cartWithRemovedPizza = removePizza(cart, pizza)

      return Result.ok(cartWithRemovedPizza.items as CartItem[])
    } catch (error) {
      return Result.fail('Could not remove from shopping cart')
    }
  }
}
