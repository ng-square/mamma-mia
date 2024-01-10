import { HttpClient } from '@angular/common/http'
import { Injectable, inject } from '@angular/core'
import { firstValueFrom } from 'rxjs'
import { Result } from '@lib'
import { Pizza } from '@domain/entities/Pizza'
import { PizzaApiPort, PizzaApiCreateDto } from '@domain/ports/PizzaApiPort'
import { environment } from '../../../environments/environment'

@Injectable({ providedIn: 'root' })
export class PizzaApiAdapter implements PizzaApiPort {
  private http = inject(HttpClient)

  async getAll() {
    const http$ = this.http.get<Pizza[]>(`${environment.apiUrl}/pizza`)
    const value = await firstValueFrom(http$)
    return Result.ok(value)
  }

  async create(dto: PizzaApiCreateDto) {
    const http$ = this.http.post(`${environment.apiUrl}/pizza`, dto)
    await firstValueFrom(http$)
    return Result.ok()
  }
}
