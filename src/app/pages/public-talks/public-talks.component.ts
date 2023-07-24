import { Component, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { Tags } from 'src/app/common/tags';
import data from '../../../assets/content/public-talks.json';
import { SanitizerPipe } from '../../common/pipes/dom-sanitizer.pipe';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { NgFor } from '@angular/common';

type PublicTalk = {
  title: string;
  description: string;
  link: string;
  tags: string[];
};

@Component({
    selector: 'app-public-talks',
    templateUrl: './public-talks.component.html',
    styleUrls: ['./public-talks.component.scss'],
    standalone: true,
    imports: [NgFor, MatCardModule, MatButtonModule, MatTooltipModule, SanitizerPipe]
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
