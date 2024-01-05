import { CartAddPizzaUseCase } from "@domain/use-cases/CartAddPizzaUseCase";

export function useCartAddPizzaUseCase(): CartAddPizzaUseCase {
  return new CartAddPizzaUseCase()
}
