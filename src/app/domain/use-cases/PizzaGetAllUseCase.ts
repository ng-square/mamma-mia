import { Result, UseCase } from '@lib';
import { PizzaApiPort } from '../ports/PizzaApiPort';
import { Pizza, createPizza } from '../entities/Pizza';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Context {}

export class PizzaGetAllUseCase implements UseCase<Context, Pizza[]> {
  constructor(private readonly api: PizzaApiPort) {}

  async execute(): Promise<Result<Pizza[], string>> {
    const result = await this.api.getAll();

    if (result.isSuccess) {
      const json = await result.value();
      const pizzas: Pizza[] = json.map((item: Pizza) => createPizza(item));
      return Result.ok(pizzas);
    } else {
      return Result.fail('Could not load pizzas form server');
    }
  }
}
