import { Result, UseCase } from '@baloise/web-app-clean-architecture';
import { RouterPort } from '../ports/RouterPort';
import { CartItem } from '../entities/CartItem';
import { Order, useOrderDefaults } from '../entities/Order';
import { countItems, createCart } from '../entities/Cart';
import { EmptyShoppingCartError } from '../entities/error/EmptyShoppingCartError';

interface Context {
  items: CartItem[];
}

interface Value {
  order: Order;
}

export class OrderCheckoutUseCase implements UseCase<Context, Value> {
  constructor(private readonly router: RouterPort) {}

  async execute({ items }: Context): Promise<Result<Value, string>> {
    try {
      const cart = createCart({ items });
      const amount = countItems(cart);

      if (amount <= 0) {
        throw new EmptyShoppingCartError();
      }

      const order = useOrderDefaults();
      this.router.goToCheckout();
      return Result.ok({ order });
    } catch (error) {
      console.error(error);
      return Result.fail('Could not checkout current shopping cart');
    }
  }
}
