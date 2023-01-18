import { AfterViewInit, Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { map, tap } from 'rxjs/operators';

import { BlogPost } from '../blog/blog.component';

import data from '../../../assets/content/blog-posts.json';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss'],
})
export class BlogPostComponent implements AfterViewInit {
  slug$ = this.route.paramMap.pipe(map((params) => params.get('slug')));
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

  blogPost$ = this.slug$.pipe(
    map((slug) => this.blogPosts.find((post) => post.slug === slug)),
    tap((post) => this.title.setTitle(post?.title ? `"${post.title}" by Armen Vardanyan | GDE` : '')),
  );

  constructor(private readonly route: ActivatedRoute, private readonly title: Title) {}

  ngAfterViewInit(): void {
      const script = document.createElement('script');
      script.src = 'https://platform.twitter.com/widgets.js';
      // script.async = true;
      document.body.appendChild(script);
  }
}
