import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesComponent } from './pages/articles/articles.component';
import { CodeSnippetsComponent } from './pages/code-snippets/code-snippets.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { OpenSourceComponent } from './pages/open-source/open-source.component';
import { PodcastsComponent } from './pages/podcasts/podcasts.component';
import { PublicTalksComponent } from './pages/public-talks/public-talks.component';

const routes: Routes = [
  { path: '', component: ArticlesComponent },
  { path: 'podcasts', component: PodcastsComponent },
  { path: 'public-talks', component: PublicTalksComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'code-snippets', component: CodeSnippetsComponent },
  { path: 'open-source', component: OpenSourceComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
