import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pizza } from '@domain/entities/Pizza';
import {
  BalSpinner,
  BalText,
} from '@baloise/design-system-components-angular/standalone';
import { PizzaCardComponent } from './pizza-card.component';

@Component({
  selector: 'app-pizza-list',
  standalone: true,
  imports: [CommonModule, BalSpinner, BalText, PizzaCardComponent],
  template: `
    @if(loading) {
    <div
      class="is-flex is-justify-content-center is-align-items-center is-flex-direction-column"
    >
      <bal-spinner></bal-spinner>
      <bal-text size="lead">Loading</bal-text>
    </div>
    } @else {
    <div class="columns is-multiline">
      <app-pizza-card
        class="column is-half"
        *ngFor="let pizza of pizzas"
        [pizza]="pizza"
        (addPizza)="addPizza.emit($event)"
      >
      </app-pizza-card>
    </div>
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PizzaListComponent {
  /**
   * List of pizzas to display on the home screen.
   */
  @Input() pizzas: Pizza[] | undefined = [];
  /**
   * If `true` a spinner is shown.
   */
  @Input() loading: boolean | undefined = false;
  /**
   * Event to add a pizza to the cart list.
   */
  @Output() addPizza = new EventEmitter<Pizza>();
}
