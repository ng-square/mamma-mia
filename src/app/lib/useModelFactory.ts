import { produce } from 'immer'
export { Immutable, produce } from 'immer'

export const useModelFactory =
  <Model = unknown, Context = unknown>(options: {
    defaults: (context?: Context) => Model
  }) =>
  (model?: Partial<Model>, context?: Context): Model => {
    return produce(options.defaults(context), (draft) => {
      return { ...draft, ...model }
    })
  }
