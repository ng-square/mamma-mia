import { Result } from '@baloise/web-app-clean-architecture'
import { Order } from '../entities/Order'
import { CartItem } from '../entities/CartItem'
import { Pizza } from '../entities/Pizza'

export interface PizzaApiCreateDto {
  order: Order
  items: CartItem[]
}

export interface PizzaApiPort {
  getAll: () => Promise<Result<Pizza[], string>>
  create: (dto: PizzaApiCreateDto) => Promise<Result<void, string>>
}
