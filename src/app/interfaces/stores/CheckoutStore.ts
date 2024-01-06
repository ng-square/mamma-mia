import { Injectable, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { createStore, select, setProp, setProps, withProps } from '@ngneat/elf';
import { Order, useOrderDefaults } from '@domain/entities/Order';
import { OrderCheckoutUseCaseFactory } from './factories/OrderCheckoutUseCaseFactory';
import { OrderSubmitUseCaseFactory } from './factories/OrderSubmitUseCaseFactory';
import { CartItem } from '@domain/entities/CartItem';

type Props = {
  order: Order;
  isLoading: boolean;
  hasFailed: boolean;
};

@Injectable({
  providedIn: 'root',
})
export class CheckoutStore {
  private orderCheckoutUseCaseFactory = inject(OrderCheckoutUseCaseFactory);
  private orderSubmitUseCaseFactory = inject(OrderSubmitUseCaseFactory);

  private store = createStore(
    { name: 'checkout' },
    withProps<Props>({
      order: useOrderDefaults(),
      isLoading: false,
      hasFailed: false,
    })
  );

  isLoading = toSignal(this.store.pipe(select((state) => state.isLoading)), {
    initialValue: false,
  });
  hasFailed = toSignal(this.store.pipe(select((state) => state.hasFailed)), {
    initialValue: false,
  });
  order = toSignal(this.store.pipe(select((state) => state.order)), {
    initialValue: useOrderDefaults(),
  });

  async checkout(items: CartItem[]) {
    const useCase = this.orderCheckoutUseCaseFactory.create();
    const result = await useCase.execute({ items });

    if (result.isSuccess) {
      const { order } = result.value();
      this.store.update(setProp('order', order));
    }
  }

  async submit(order: Order, items: CartItem[]) {
    this.store.update(setProps(() => ({ isLoading: true, hasFailed: false })));

    const useCase = this.orderSubmitUseCaseFactory.create();
    const result = await useCase.execute({ order, items });

    if (result.isSuccess) {
      const { order: newOrder } = result.value();
      this.store.update(setProp('order', newOrder));
    } else {
      this.store.update(setProp('hasFailed', true));
    }

    this.store.update(setProp('isLoading', false));
  }
}
