import { Injectable, inject } from '@angular/core'
import { toSignal } from '@angular/core/rxjs-interop'
import { createStore, select, setProp, withProps } from '@ngneat/elf'
import { Pizza } from '@domain/entities/Pizza'
import { CartItem } from '@domain/entities/CartItem'
import { calculateTotal, countItems } from '@domain/entities/Cart'
import { CartAddPizzaUseCaseFactory } from './factories/CartAddPizzaUseCaseFactory'
import { CartRemovePizzaUseCaseFactory } from './factories/CartRemovePizzaUseCaseFactory'
import { CartResetUseCaseFactory } from './factories/CartResetUseCaseFactory'

type Props = {
  items: CartItem[]
}

@Injectable({
  providedIn: 'root',
})
export class CartStore {
  private cartAddPizzaUseCaseFactory = inject(CartAddPizzaUseCaseFactory)
  private cartRemovePizzaUseCaseFactory = inject(CartRemovePizzaUseCaseFactory)
  private cartResetPizzaUseCaseFactory = inject(CartResetUseCaseFactory)

  private store = createStore({ name: 'cart' }, withProps<Props>({ items: [] }))

  amount = toSignal(this.store.pipe(select((state) => countItems(state))))
  total = toSignal(this.store.pipe(select((state) => calculateTotal(state))))
  items = toSignal(this.store.pipe(select((state) => state.items)), {
    initialValue: [],
  })

  async addPizza(pizza: Pizza) {
    const state = this.store.getValue()
    const result = await this.cartAddPizzaUseCaseFactory.create().execute({
      pizza,
      items: state.items,
    })

    if (result.isSuccess) {
      this.store.update(setProp('items', result.value()))
    }
  }

  async removePizza(pizza: Pizza) {
    const state = this.store.getValue()
    const result = await this.cartRemovePizzaUseCaseFactory.create().execute({
      pizza,
      items: state.items,
    })

    if (result.isSuccess) {
      this.store.update(setProp('items', result.value()))
    }
  }

  async reset() {
    const result = await this.cartResetPizzaUseCaseFactory.create().execute()

    if (result.isSuccess) {
      this.store.update(setProp('items', result.value().items))
    }
  }
}
