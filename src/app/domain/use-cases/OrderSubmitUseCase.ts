import { Result, UseCase } from '@baloise/web-app-clean-architecture';
import { RouterPort } from '../ports/RouterPort';
import { PizzaApiPort } from '../ports/PizzaApiPort';
import { NotificationPort } from '../ports/NotificationPort';
import { createCart, countItems } from '../entities/Cart';
import { CartItem } from '../entities/CartItem';
import { Order, createOrder } from '../entities/Order';

interface Context {
  items: CartItem[];
  order: Order;
}

interface Value {
  order: Order;
}

export class OrderSubmitUseCase implements UseCase<Context, Value> {
  constructor(
    private readonly api: PizzaApiPort,
    private readonly notification: NotificationPort,
    private readonly router: RouterPort
  ) {}

  async execute({ items, order }: Context): Promise<Result<Value, string>> {
    const cart = createCart({ items });
    const amount = countItems(cart);

    if (amount <= 0) {
      return Result.fail('Cannot submit order with empty cart');
    }

    const result = await this.api.create({ items, order });

    if (result.isSuccess) {
      this.notification.success();
      await this.router.goToHome();
      return Result.ok({ order: createOrder() });
    }
    return Result.fail('Submit request failed');
  }
}
