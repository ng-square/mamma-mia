import { Injectable, inject } from '@angular/core';
import { UseCaseFactory } from '@lib';
import { OrderSubmitUseCase } from '@domain/use-cases/OrderSubmitUseCase';
import { PizzaApiAdapter } from '@interfaces/adapters/PizzaApiAdapter';
import { NotificationAdapter } from '@interfaces/adapters/NotificationAdapter';
import { RouterAdapter } from '@interfaces/adapters/RouterAdapter';

@Injectable({ providedIn: 'root' })
export class OrderSubmitUseCaseFactory
  implements UseCaseFactory<OrderSubmitUseCase>
{
  private api = inject(PizzaApiAdapter);
  private notification = inject(NotificationAdapter);
  private router = inject(RouterAdapter);

  create() {
    return new OrderSubmitUseCase(this.api, this.notification, this.router);
  }
}
