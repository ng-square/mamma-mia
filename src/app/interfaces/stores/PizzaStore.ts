import { Injectable, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { createStore, select, setProp, setProps, withProps } from '@ngneat/elf';
import { Pizza } from '@domain/entities/Pizza';
import {
  selectAllEntities,
  setEntities,
  withEntities,
} from '@ngneat/elf-entities';
import { PizzaGetAllUseCaseFactory } from './factories/PizzaGetAllUseCaseFactory';

type Props = {
  isLoading: boolean;
  hasFailed: boolean;
};

@Injectable({
  providedIn: 'root',
})
export class PizzaStore {
  private pizzaGetAllUseCase = inject(PizzaGetAllUseCaseFactory);

  private store = createStore(
    { name: 'pizza' },
    withEntities<Pizza>(),
    withProps<Props>({ isLoading: false, hasFailed: false })
  );

  isLoading = toSignal(this.store.pipe(select((state) => state.isLoading)));
  hasFailed = toSignal(this.store.pipe(select((state) => state.hasFailed)));
  items = toSignal(this.store.pipe(selectAllEntities()));

  async load() {
    this.store.update(setProps(() => ({ isLoading: true, hasFailed: false })));

    const useCase = this.pizzaGetAllUseCase.create();
    const result = await useCase.execute();

    if (result.isSuccess) {
      this.store.update(setEntities(result.value()));
    } else {
      this.store.update(setProp('hasFailed', true));
    }

    this.store.update(setProp('isLoading', false));
  }
}
