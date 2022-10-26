import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

import data from '../../../assets/content/public-talks.json';

type PublicTalk = {
  title: string;
  description: string;
  link: string;
  tags: string[];
};

@Component({
  selector: 'app-public-talks',
  templateUrl: './public-talks.component.html',
  styleUrls: ['./public-talks.component.scss']
})
export class PublicTalksComponent {
  tagMap = new Map<string, string>([
    ['rxjs', 'https://rxjs.dev/'],
    ['angular', 'https://angular.io/'],
    ['typescript', 'https://www.typescriptlang.org/'],
    ['ngrx', 'https://ngrx.io/'],
  ]);
  talks = (data as unknown as PublicTalk[]).map(article => ({
    ...article,
    tags: article.tags.map(tag => ({
      name: tag,
      link: this.tagMap.get(tag),
    })),
  }));

  constructor(private readonly title: Title) {
    this.title.setTitle('Public Talks | Armen Vardanyan | GDE');
  }

}
