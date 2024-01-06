import { Injectable, inject } from '@angular/core';
import { BalToastService } from '@baloise/design-system-components-angular/standalone';
import { NotificationPort } from '@domain/ports/NotificationPort';

@Injectable({ providedIn: 'root' })
export class NotificationAdapter implements NotificationPort {
  private toast = inject(BalToastService);

  success() {
    this.toast.create({
      color: 'success',
      message: 'checkout.notification.success',
      duration: 2000,
    });
  }
}
