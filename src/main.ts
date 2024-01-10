import { bootstrapApplication } from '@angular/platform-browser'
import { appConfig } from './app/ui/config/app.config'
import { AppComponent } from './app/ui/app.component'

import { devTools } from '@ngneat/elf-devtools'
import { enableElfProdMode } from '@ngneat/elf'
import { environment } from './environments/environment'
import { enableProdMode } from '@angular/core'

if (environment.production) {
  enableProdMode()
  enableElfProdMode()
}

bootstrapApplication(AppComponent, appConfig)
  .then((app) => {
    devTools({
      postTimelineUpdate: () => app.tick(),
    })
  })
  .catch((err) => console.error(err))
