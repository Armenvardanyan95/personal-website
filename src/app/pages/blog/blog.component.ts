import { Component, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';

import data from '../../../assets/content/blog-posts.json';
import { Tags } from 'src/app/common/tags';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { NgFor, DatePipe, NgOptimizedImage } from '@angular/common';

export interface BlogPost {
	title: string;
	slug: string;
	date: string;
	description: string;
	file: string;
	cover: string;
  ogCover: string;
	tags: string[];
}

@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.scss'],
    standalone: true,
    imports: [
        NgFor,
        RouterLink,
        MatButtonModule,
        MatTooltipModule,
        DatePipe,
        NgOptimizedImage,
    ],
})
export class BlogComponent {
  tagMap = inject(Tags);
  blogPosts = (data as unknown as BlogPost[]).map((article) => ({
    ...article,
    tags: article.tags.map((tag) => ({
      name: tag,
      link: this.tagMap.get(tag),
    })),
  }));

  constructor(private readonly title: Title) {
    this.title.setTitle('Armen Vardanyan | GDE');
  }
}
