import { Router } from '@angular/router'
import { NotificationAdapter } from '../../adapters/NotificationAdapter'
import { RouterAdapter } from '../../adapters/RouterAdapter'
import { OrderSubmitUseCase } from '@domain/use-cases/OrderSubmitUseCase'

export function useOrderSubmitUseCase(
  router: Router,
  // cart: CartStorePort,
): OrderSubmitUseCase {
  // const api = new PizzaApiMockAdapter()
  const notification = new NotificationAdapter()
  const vueRouter = new RouterAdapter(router)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return new OrderSubmitUseCase(undefined as any, notification, vueRouter)
}
