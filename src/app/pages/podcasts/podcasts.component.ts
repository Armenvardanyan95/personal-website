import { Component, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';

import data from '../../../assets/content/podcasts.json';
import { Tags } from 'src/app/common/tags';
import { Podcast } from 'src/app/common/types/podcast.type';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { NgFor, DatePipe } from '@angular/common';

@Component({
    selector: 'app-podcasts',
    templateUrl: './podcasts.component.html',
    styleUrls: ['./podcasts.component.scss'],
    standalone: true,
    imports: [
        NgFor,
        MatCardModule,
        MatTooltipModule,
        MatButtonModule,
        DatePipe,
    ],
})
export class PodcastsComponent {
  tagMap = inject(Tags);
  podcasts = (data as unknown as Podcast[]).map((podcast) => ({
    ...podcast,
    tags: podcast.tags.map((tag) => ({
      name: tag,
      link: this.tagMap.get(tag),
    })),
  }));

  constructor(private titleService: Title) {
    this.titleService.setTitle('Podcasts | Armen Vardanyan | GDE');
  }
}
