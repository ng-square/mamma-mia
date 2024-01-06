import { Injectable, inject } from '@angular/core';
import { PizzaGetAllUseCase } from '@domain/use-cases/PizzaGetAllUseCase';
import { PizzaApiAdapter } from '@interfaces/adapters/PizzaApiAdapter';
import { UseCaseFactory } from '@lib';

@Injectable({ providedIn: 'root' })
export class PizzaGetAllUseCaseFactory
  implements UseCaseFactory<PizzaGetAllUseCase>
{
  private api = inject(PizzaApiAdapter);

  create() {
    return new PizzaGetAllUseCase(this.api);
  }
}
