import { PizzaGetAllUseCase } from '@domain/use-cases/PizzaGetAllUseCase';

export function usePizzaGetAllUseCase(): PizzaGetAllUseCase {
  // const api = new PizzaApiMockAdapter()

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return new PizzaGetAllUseCase(undefined as any);
}
