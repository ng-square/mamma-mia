import { DomainError } from "@lib";

export class EmptyShoppingCartError extends DomainError {
  constructor(...params: unknown[]) {
    super('EmptyShoppingCartError', ...params)
  }
}
