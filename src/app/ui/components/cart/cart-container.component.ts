import {
  ChangeDetectionStrategy,
  Component,
  Input,
  inject,
} from '@angular/core'
import { CommonModule } from '@angular/common'
import { CartCardComponent } from './cart-card.component'
import { CartStore } from '@interfaces/stores/CartStore'
import { CheckoutStore } from '@interfaces/stores/CheckoutStore'

@Component({
  selector: 'app-cart-container',
  standalone: true,
  imports: [CommonModule, CartCardComponent],
  template: `
    <app-cart-card
      [readonly]="readonly"
      [items]="cartStore.items()"
      [amount]="cartStore.amount() || 0"
      [total]="cartStore.total() || 0"
      (checkout)="checkout()"
      (addPizza)="cartStore.addPizza($event)"
      (removePizza)="cartStore.removePizza($event)"
    >
    </app-cart-card>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartContainerComponent {
  cartStore = inject(CartStore)
  checkoutStore = inject(CheckoutStore)

  /**
   * If `true` the cart items can only be viewed
   * and not changed anymore.
   */
  @Input() readonly = false

  checkout() {
    this.checkoutStore.checkout(this.cartStore.items())
  }
}
