import { balToastController } from '@baloise/design-system-components'
import { NotificationPort } from '@domain/ports/NotificationPort'

export class NotificationAdapter implements NotificationPort {
  success() {
    balToastController.create({
      color: 'success',
      message: 'checkout.notification.success',
      duration: 2000,
    })
  }
}
