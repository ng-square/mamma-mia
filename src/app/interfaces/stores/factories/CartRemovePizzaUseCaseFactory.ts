import { Injectable } from '@angular/core'
import { CartRemovePizzaUseCase } from '@domain/use-cases/CartRemovePizzaUseCase'
import { UseCaseFactory } from '@lib'

@Injectable({ providedIn: 'root' })
export class CartRemovePizzaUseCaseFactory
  implements UseCaseFactory<CartRemovePizzaUseCase>
{
  create() {
    return new CartRemovePizzaUseCase()
  }
}
