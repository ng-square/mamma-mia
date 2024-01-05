import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="columns my-4">
      <div class="column is-8">
        adsf
        <!-- <app-pizza-container></app-pizza-container> -->
      </div>
      <div class="column is-4">
        qewr
        <!-- <app-cart-container></app-cart-container> -->
      </div>
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
