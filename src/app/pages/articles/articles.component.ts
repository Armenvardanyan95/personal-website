import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import data from '../../../assets/content/articles.json';

type Article = {
  title: string;
  link: string;
  img: string;
  tags: ('rxjs' | 'angular' | 'typescript' | 'ngrx')[];
  description: string;
};

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent {
  tagMap = new Map<string, string>([
    ['rxjs', 'https://rxjs.dev/'],
    ['angular', 'https://angular.io/'],
    ['typescript', 'https://www.typescriptlang.org/'],
    ['ngrx', 'https://ngrx.io/'],
  ]);
  articles = (data as unknown as Article[]).map(article => ({
    ...article,
    tags: article.tags.map(tag => ({
      name: tag,
      link: this.tagMap.get(tag),
    })),
  }));

  constructor(private readonly title: Title) {
    this.title.setTitle('Armen Vardanyan | GDE');
  }
}
