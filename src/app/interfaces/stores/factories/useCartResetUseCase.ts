import { CartResetUseCase } from "@domain/use-cases/CartResetUseCase";

export function useCartResetUseCase(): CartResetUseCase {
  return new CartResetUseCase()
}
