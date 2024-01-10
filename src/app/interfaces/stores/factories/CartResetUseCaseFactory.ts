import { Injectable } from '@angular/core'
import { CartResetUseCase } from '@domain/use-cases/CartResetUseCase'
import { UseCaseFactory } from '@lib'

@Injectable({ providedIn: 'root' })
export class CartResetUseCaseFactory
  implements UseCaseFactory<CartResetUseCase>
{
  create() {
    return new CartResetUseCase()
  }
}
