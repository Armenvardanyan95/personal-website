import { Component, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { Tags } from 'src/app/common/tags';
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
  tagMap = inject(Tags);
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
