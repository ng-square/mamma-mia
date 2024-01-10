import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core'
import { CommonModule } from '@angular/common'
import {
  BalInputStepper,
  BalTypographyBundle,
} from '@baloise/design-system-components-angular/standalone'
import { Pizza } from '@domain/entities/Pizza'
import {
  CartItem,
  calculatePrice,
  createCartItem,
  useCartItemDefaults,
} from '@domain/entities/CartItem'

@Component({
  selector: 'app-cart-list-item',
  standalone: true,
  imports: [CommonModule, BalInputStepper, BalTypographyBundle],
  template: `
    <div
      class="is-flex is-justify-content-center is-align-items-center mb-small"
    >
      <bal-heading level="medium" space="none" style="width: 120px;">
        {{ item.pizza.name }}
      </bal-heading>
      <bal-input-stepper
        *ngIf="!readonly"
        class="is-flex-grow-1"
        min="0"
        max="10"
        [value]="item.amount"
        (balIncrease)="addPizza.emit(item.pizza)"
        (balDecrease)="removePizza.emit(item.pizza)"
      ></bal-input-stepper>
      <bal-text
        *ngIf="readonly"
        class="is-flex-grow-1 has-text-right"
        space="none"
      >
        x{{ item.amount }}
      </bal-text>
      <bal-text bold space="none" class="has-text-right" style="width: 120px;">
        {{ price() | currency: 'CHF ' }}
      </bal-text>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartListItemComponent {
  /**
   * Cart list item has a pizza and the selected
   * amount of it.
   */
  @Input() item: CartItem = useCartItemDefaults()
  /**
   * If `true` the cart items can only be viewed
   * and not changed anymore.
   */
  @Input() readonly = false
  /**
   * Event to add a pizza to the cart list.
   */
  @Output() addPizza = new EventEmitter<Pizza>()
  /**
   * Event to remove a pizza to the cart list.
   */
  @Output() removePizza = new EventEmitter<Pizza>()

  price(): number {
    return calculatePrice(createCartItem(this.item))
  }
}
