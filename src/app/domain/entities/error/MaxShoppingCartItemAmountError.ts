import { DomainError } from '@lib'

export class MaxShoppingCartItemAmountError extends DomainError {
  constructor(...params: unknown[]) {
    super('MaxShoppingCartItemAmountError', ...params)
  }
}
