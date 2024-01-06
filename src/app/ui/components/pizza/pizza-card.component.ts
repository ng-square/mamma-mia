import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  BalButtonBundle,
  BalCardBundle,
  BalContent,
  BalStack,
  BalTypographyBundle,
} from '@baloise/design-system-components-angular/standalone';
import { Pizza } from '@domain/entities/Pizza';

@Component({
  selector: 'app-pizza-card',
  standalone: true,
  imports: [
    CommonModule,
    BalCardBundle,
    BalButtonBundle,
    BalTypographyBundle,
    BalStack,
    BalContent,
  ],
  template: `
    @if(pizza){
    <bal-card fullheight>
      <bal-card-content>
        <bal-stack layout="vertical" align="center">
          <img
            src="/assets/images/pizza.png"
            alt="pizza"
            width="120"
            height="120"
          />
          <bal-heading level="large">{{ pizza.name }}</bal-heading>
          <bal-text>{{ pizza.description }}</bal-text>
          <bal-text bold>{{ pizza.price | currency : 'CHF ' }}</bal-text>
          <bal-button icon="plus" (click)="addPizza.emit(pizza)">
            Add
          </bal-button>
        </bal-stack>
      </bal-card-content>
    </bal-card>
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PizzaCardComponent {
  /**
   * Pizza domain object to display the pizza.
   */
  @Input() pizza?: Pizza;
  /**
   * Event to add a pizza to the cart list.
   */
  @Output() addPizza = new EventEmitter<Pizza>();
}
