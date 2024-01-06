import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartListComponent } from './cart-list.component';
import {
  BalButtonBundle,
  BalCardBundle,
} from '@baloise/design-system-components-angular/standalone';
import { CartItem } from '@domain/entities/CartItem';
import { Pizza } from '@domain/entities/Pizza';

@Component({
  selector: 'app-cart-card',
  standalone: true,
  imports: [
    CommonModule,
    CartListComponent,
    BalCardBundle,
    BalButtonBundle,
  ],
  template: `
    <bal-card>
      <bal-card-content>
        <h2 class="title is-size-3 mt-none mb-medium">Checkout</h2>
        <app-cart-list
          [items]="items"
          [readonly]="readonly"
          (addPizza)="addPizza.emit($event)"
          (removePizza)="removePizza.emit($event)"
        >
        </app-cart-list>
        <p *ngIf="isEmpty()">Empty</p>
        <hr class="lined my-small" *ngIf="!isEmpty()" />
        <div class="is-flex my-small" *ngIf="!isEmpty()">
          <p class="is-flex-grow-1 title is-size-medium">Total</p>
          <p class="has-text-right has-text-weight-bold">
            {{ total | currency : 'CHF ' }}
          </p>
        </div>
        <bal-button
          *ngIf="!readonly"
          class="mt-medium"
          expanded
          [disabled]="isEmpty()"
          (click)="checkout.emit()"
        >
          Checkout
        </bal-button>
      </bal-card-content>
    </bal-card>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartCardComponent {
  /**
   * List of the current selected cart items.
   */
  @Input() items: CartItem[] = [];
  /**
   * Total price of all the selected cart items.
   */
  @Input() total = 0;
  /**
   * Amount of pizzas in the cart.
   */
  @Input() amount = 0;
  /**
   * If `true` the cart items can only be viewed
   * and not changed anymore.
   */
  @Input() readonly = false;
  /**
   * Event to add a pizza to the cart list.
   */
  @Output() addPizza = new EventEmitter<Pizza>();
  /**
   * Event to remove a pizza to the cart list.
   */
  @Output() removePizza = new EventEmitter<Pizza>();
  /**
   * Event to checkout the current cart items and
   * to proceed to finish the order.
   */
  @Output() checkout = new EventEmitter<void>();

  isEmpty(): boolean {
    return this.items.length === 0;
  }
}
