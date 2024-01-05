import { CartRemovePizzaUseCase } from "@domain/use-cases/CartRemovePizzaUseCase";

export function useCartRemovePizzaUseCase(): CartRemovePizzaUseCase {
  return new CartRemovePizzaUseCase()
}
