import { OrderCheckoutUseCase } from '@domain/use-cases/OrderCheckoutUseCase'
import { RouterAdapter } from '../../adapters/RouterAdapter'
import { Injectable, inject } from '@angular/core'
import { UseCaseFactory } from '@lib'

@Injectable({ providedIn: 'root' })
export class OrderCheckoutUseCaseFactory
  implements UseCaseFactory<OrderCheckoutUseCase>
{
  private router = inject(RouterAdapter)

  create() {
    return new OrderCheckoutUseCase(this.router)
  }
}
