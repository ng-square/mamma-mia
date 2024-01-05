import { Router } from '@angular/router'
import { RouterAdapter } from '../../adapters/RouterAdapter'
import { OrderCheckoutUseCase } from '@domain/use-cases/OrderCheckoutUseCase'

export function useOrderCheckoutUseCase(router: Router): OrderCheckoutUseCase {
  return new OrderCheckoutUseCase(new RouterAdapter(router))
}
