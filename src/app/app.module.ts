import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MarkdownModule } from 'ngx-markdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ArticlesComponent } from './pages/articles/articles.component';
import { PodcastsComponent } from './pages/podcasts/podcasts.component';
import { PublicTalksComponent } from './pages/public-talks/public-talks.component';
import { SanitizerPipe } from './common/pipes/dom-sanitizer.pipe';
import { CoursesComponent } from './pages/courses/courses.component';
import { CodeSnippetsComponent } from './pages/code-snippets/code-snippets.component';
import { OpenSourceComponent } from './pages/open-source/open-source.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    PodcastsComponent,
    PublicTalksComponent,
    SanitizerPipe,
    CoursesComponent,
    CodeSnippetsComponent,
    OpenSourceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatTooltipModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MarkdownModule.forRoot(),
  ],
  providers: [
    MatIconRegistry,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
