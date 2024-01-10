import { ChangeDetectionStrategy, Component, inject } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CheckoutFormComponent } from './checkout-form.component'
import { Order } from '@domain/entities/Order'
import { RouterAdapter } from '@interfaces/adapters/RouterAdapter'
import { CartStore } from '@interfaces/stores/CartStore'
import { CheckoutStore } from '@interfaces/stores/CheckoutStore'

@Component({
  selector: 'app-checkout-container',
  standalone: true,
  imports: [CommonModule, CheckoutFormComponent],
  template: `
    <app-checkout-form
      [order]="checkoutStore.order()"
      [loading]="checkoutStore.isLoading()"
      (backToHome)="this.routerAdapter.goToHome()"
      (submitOrder)="submitOrder($event)"
    >
    </app-checkout-form>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckoutContainerComponent {
  routerAdapter = inject(RouterAdapter)
  cartStore = inject(CartStore)
  checkoutStore = inject(CheckoutStore)

  submitOrder(order: Order) {
    this.checkoutStore.submit(order, this.cartStore.items())
  }
}
