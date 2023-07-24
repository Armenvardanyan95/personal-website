import { enableProdMode, importProvidersFrom } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { MarkdownModule } from 'ngx-markdown';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { provideAnimations } from '@angular/platform-browser/animations';
import { withInterceptorsFromDi, provideHttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app/app-routing.module';
import { BrowserModule, HammerModule, bootstrapApplication } from '@angular/platform-browser';
import { Tags, TAGS } from './app/common/tags';
import { APP_BASE_HREF } from '@angular/common';
import { MatIconRegistry, MatIconModule } from '@angular/material/icon';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(
          BrowserModule,
          AppRoutingModule, MatButtonModule, MatCardModule, MatTooltipModule, MatListModule, MatSidenavModule, MatToolbarModule, MatIconModule, MatMenuModule, MarkdownModule.forRoot(), ScullyLibModule, HammerModule),
        MatIconRegistry,
        { provide: APP_BASE_HREF, useValue: '/' },
        { provide: Tags, useValue: TAGS },
        provideHttpClient(withInterceptorsFromDi()),
        provideAnimations()
    ]
})
  .catch(err => console.error(err));
