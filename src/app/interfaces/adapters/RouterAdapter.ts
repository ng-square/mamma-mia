import { Injectable, inject } from '@angular/core'
import { Router } from '@angular/router'
import { RouterPort } from '@domain/ports/RouterPort'

@Injectable({
  providedIn: 'root',
})
export class RouterAdapter implements RouterPort {
  private router = inject(Router)

  async goToHome() {
    await this.router.navigateByUrl('/')
  }

  async goToCheckout() {
    await this.router.navigateByUrl('/checkout')
  }
}
