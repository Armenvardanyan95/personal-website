import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

import data from '../../../assets/content/blog-posts.json';

export interface BlogPost {
	title: string;
	slug: string;
	date: string;
	description: string;
	file: string;
	cover: string;
	tags: string[];
}

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent {
  tagMap = new Map<string, string>([
    ['rxjs', 'https://rxjs.dev/'],
    ['angular', 'https://angular.io/'],
    ['typescript', 'https://www.typescriptlang.org/'],
    ['ngrx', 'https://ngrx.io/'],
  ]);
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
