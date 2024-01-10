export type UseCaseFactory<TUseCase> = {
  create(): TUseCase
}
