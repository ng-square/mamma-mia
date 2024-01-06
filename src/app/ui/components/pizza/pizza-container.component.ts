import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { PizzaStore } from '@interfaces/stores/PizzaStore';
import { PizzaListComponent } from './pizza-list.component';
import { CartStore } from '@interfaces/stores/CartStore';

@Component({
  selector: 'app-pizza-container',
  standalone: true,
  imports: [CommonModule, PizzaListComponent],
  template: `
    <app-pizza-list
      [loading]="pizzaStore.isLoading()"
      [pizzas]="pizzaStore.items()"
      (addPizza)="cartStore.addPizza($event)"
    >
    </app-pizza-list>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PizzaContainerComponent implements OnInit {
  pizzaStore = inject(PizzaStore);
  cartStore = inject(CartStore);

  ngOnInit(): void {
    this.pizzaStore.load();
  }
}
