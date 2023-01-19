import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserModule } from '@angular/platform-browser';
import { MarkdownModule } from 'ngx-markdown';

import { APP_BASE_HREF } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SanitizerPipe } from './common/pipes/dom-sanitizer.pipe';
import { ArticlesComponent } from './pages/articles/articles.component';
import { BlogPostComponent } from './pages/blog-post/blog-post.component';
import { BlogComponent } from './pages/blog/blog.component';
import { CodeSnippetsComponent } from './pages/code-snippets/code-snippets.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { OpenSourceComponent } from './pages/open-source/open-source.component';
import { PodcastsComponent } from './pages/podcasts/podcasts.component';
import { PublicTalksComponent } from './pages/public-talks/public-talks.component';

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
    BlogComponent,
    BlogPostComponent,
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
    ScullyLibModule,
  ],
  providers: [
    MatIconRegistry,
    {provide: APP_BASE_HREF, useValue: '/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


// pure js function that scrolls to bottom of page

function scrollToBottom() {
  window.scrollTo(0, document.body.scrollHeight);
}


