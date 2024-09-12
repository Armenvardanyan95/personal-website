import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Title } from '@angular/platform-browser';

import { DatePipe, NgClass } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Tags } from 'src/app/common/tags';
import { Podcast } from 'src/app/common/types/podcast.type';

@Component({
  selector: 'app-podcasts',
  templateUrl: './podcasts.component.html',
  styleUrls: ['./podcasts.component.scss'],
  standalone: true,
  imports: [
    NgClass,
    MatCardModule,
    MatTooltipModule,
    MatButtonModule,
    DatePipe,
  ],
})
export class PodcastsComponent {
  tagMap = inject(Tags);
  private readonly http = inject(HttpClient);
  private readonly podcastsRaw = toSignal(
    this.http.get<Podcast[]>('assets/content/podcasts.json'),
    {initialValue: []},
  );
  podcasts = computed(() => {
    return this.podcastsRaw().map((podcast) => ({
      ...podcast,
      tags: podcast.tags.map((tag) => ({
        name: tag,
        link: this.tagMap.get(tag),
      })),
    }));
  });

  constructor(private titleService: Title) {
    this.titleService.setTitle('Podcasts | Armen Vardanyan | GDE');
  }
}
