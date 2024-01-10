import { Injectable } from '@angular/core'
import { CartAddPizzaUseCase } from '@domain/use-cases/CartAddPizzaUseCase'
import { UseCaseFactory } from '@lib'

@Injectable({ providedIn: 'root' })
export class CartAddPizzaUseCaseFactory
  implements UseCaseFactory<CartAddPizzaUseCase>
{
  create() {
    return new CartAddPizzaUseCase()
  }
}
