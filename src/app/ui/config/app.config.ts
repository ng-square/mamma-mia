import { ApplicationConfig, isDevMode } from '@angular/core'
import { provideRouter } from '@angular/router'
import { appRoutes } from './app.routes'
import { provideHttpClient } from '@angular/common/http'
import { TranslocoHttpLoader } from './transloco-loader'
import { provideTransloco } from '@ngneat/transloco'
import { provideBaloiseDesignSystem } from '@baloise/design-system-components-angular/standalone'

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes),
    provideHttpClient(),
    provideBaloiseDesignSystem(),
    provideTransloco({
      config: {
        availableLangs: ['en', 'de'],
        defaultLang: 'en',
        reRenderOnLangChange: true,
        prodMode: !isDevMode(),
      },
      loader: TranslocoHttpLoader,
    }),
  ],
}
