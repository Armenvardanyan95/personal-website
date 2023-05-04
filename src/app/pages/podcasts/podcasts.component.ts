import { Component, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';

import data from '../../../assets/content/podcasts.json';
import { Tags } from 'src/app/common/tags';

console.log({data});

type Podcast = {
  title: string;
  description: string;
  link: string;
  image?: string;
  date: string;
  tags: string[];
};


@Component({
  selector: 'app-podcasts',
  templateUrl: './podcasts.component.html',
  styleUrls: ['./podcasts.component.scss'],
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
