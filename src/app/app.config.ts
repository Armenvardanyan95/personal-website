import { APP_BASE_HREF, IMAGE_LOADER, ImageLoaderConfig } from '@angular/common';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserModule, HammerModule, provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter, withViewTransitions } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { routes } from './app-routes';
import { TAGS, Tags } from './common/tags';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(
      BrowserModule,
      MatButtonModule,
      MatCardModule,
      MatTooltipModule,
      MatListModule,
      MatSidenavModule,
      MatToolbarModule,
      MatIconModule,
      MatMenuModule,
      MarkdownModule.forRoot(),
      HammerModule
    ),
    MatIconRegistry,
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: IMAGE_LOADER, useValue: (config: ImageLoaderConfig) => config.src },
    { provide: Tags, useValue: TAGS },
    provideHttpClient(withFetch()),
    provideAnimations(),
    provideClientHydration(),
    provideRouter(routes, withViewTransitions()),
  ],
};
