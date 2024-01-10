import { Result } from '@lib'
import { Pizza } from '@domain/entities/Pizza'
import { PizzaApiPort, PizzaApiCreateDto } from '@domain/ports/PizzaApiPort'

// https://mamma-mia-pizzas.vercel.app/api/
export class PizzaApiMockAdapter implements PizzaApiPort {
  async getAll() {
    await this.wait()
    return Result.ok(PizzaApiMockAdapter.pizzas)
  }

  async create(dto: PizzaApiCreateDto) {
    await this.wait()
    if (dto) {
      return Result.ok()
    }
    return Result.fail('Empty body')
  }

  private wait() {
    return new Promise((resolve) => setTimeout(() => resolve(undefined), 1200))
  }

  static pizzas: Pizza[] = [
    {
      id: 1,
      name: 'Margherita',
      description: 'Tomato sauce, mozzarella, organic oregano',
      price: 16,
      image: 'src/app/assets/Margherita.jpeg',
    },
    {
      id: 2,
      name: 'Stromboli',
      description:
        'Tomato sauce, mozzarella, fresh chillies, olives, organic oregano',
      price: 18,
      image: 'src/app/assets/Margherita.jpeg',
    },
    {
      id: 3,
      name: 'Napoli',
      description:
        'Tomato sauce, mozzarella, anchovies MSC, capers, organic oregano',
      price: 19,
      image: 'src/app/assets/Margherita.jpeg',
    },
    {
      id: 4,
      name: 'Funghi',
      description: 'Tomato sauce, mozzarella, fresh mushrooms, organic oregano',
      price: 20,
      image: 'src/app/assets/Margherita.jpeg',
    },
  ]
}
