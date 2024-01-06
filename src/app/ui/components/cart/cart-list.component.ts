import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core'
import { CommonModule } from '@angular/common'
import { CartListItemComponent } from './cart-list-item.component'
import { CartItem } from '@domain/entities/CartItem'
import { Pizza } from '@domain/entities/Pizza'

@Component({
  selector: 'app-cart-list',
  standalone: true,
  imports: [CommonModule, CartListItemComponent],
  template: `
    <div>
      <app-cart-list-item
        *ngFor="let item of items"
        [item]="item"
        [readonly]="readonly"
        (addPizza)="addPizza.emit($event)"
        (removePizza)="removePizza.emit($event)">
      </app-cart-list-item>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartListComponent {
  /**
   * List of the current selected cart items.
   */
  @Input() items: CartItem[] = []
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
}
