import { AfterViewInit, Component, Injector, afterNextRender, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { map, tap } from 'rxjs/operators';

import { BlogPost } from '../blog/blog.component';

import { AsyncPipe, NgIf, NgOptimizedImage } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';
import { Tags } from 'src/app/common/tags';
import data from '../../../assets/content/blog-posts.json';



@Component({
    selector: 'app-blog-post',
    templateUrl: './blog-post.component.html',
    styleUrls: ['./blog-post.component.scss'],
    standalone: true,
    imports: [
        NgIf,
        MarkdownModule,
        AsyncPipe,
        NgOptimizedImage,
    ],
})
export class BlogPostComponent implements AfterViewInit {
  slug$ = this.route.paramMap.pipe(map((params) => params.get('slug')));
  tagMap = inject(Tags);
  injector = inject(Injector);
  blogPosts = (data as unknown as BlogPost[]).map((article) => ({
    ...article,
    tags: article.tags.map((tag) => ({
      name: tag,
      link: this.tagMap.get(tag),
    })),
  }));

  blogPost$ = this.slug$.pipe(
    map((slug) => this.blogPosts.find((post) => post.slug === slug)),
    tap((post) => {
      this.title.setTitle(
        post?.title ? `"${post.title}" by Armen Vardanyan | GDE` : ''
      );

      this.meta.updateTag({
        property: 'og:image',
        content: `https://armenvardanyan.dev/assets/images/cover-photos/${post?.ogCover}`,
      });

      this.meta.updateTag({
        property: 'og:title',
        content: `"${post?.title ?? 'Blog post'}" by Armen Vardanyan | GDE`,
      });

      this.meta.updateTag({
        property: 'og:description',
        content: post?.description ?? 'Blog post by Armen Vardanyan',
      });
      this.meta.updateTag({
        property: 'og:author',
        content: 'Armen Vardanyan',
      });

      // twitter meta tags

      this.meta.updateTag({
        name: 'twitter:card',
        content: 'summary_large_image',
      });
      this.meta.updateTag({
        property: 'twitter:domain',
        content: 'armenvardanyan.dev',
      });
      this.meta.updateTag({
        property: 'twitter:url',
        content: `https://armenvardanyan.dev/blog/${post?.slug}`,
      });
      this.meta.updateTag({
        name: 'twitter:title',
        content: `"${post?.title}" by Armen Vardanyan | GDE`,
      });
      this.meta.updateTag({
        name: 'twitter:creator',
        content: '@armenvardanyan',
      });
      this.meta.updateTag({
        name: 'twitter:site',
        content: '@armenvardanyan',
      });
      this.meta.updateTag({
        name: 'twitter:image',
        content: `https://armenvardanyan.dev/assets/images/cover-photos/${post?.ogCover}`,
      });
      this.meta.updateTag({
        name: 'twitter:image:src',
        content: `https://armenvardanyan.dev/assets/images/cover-photos/${post?.ogCover}`,
      });
      this.meta.updateTag({
        name: 'twitter:card:image',
        content: `https://armenvardanyan.dev/assets/images/cover-photos/${post?.ogCover}`,
      });
      this.meta.updateTag({
        name: 'twitter:widgets:new-embed-design',
        content: 'on',
      });
      this.meta.updateTag({
        name: 'twitter:description',
        content: post?.description ?? 'Blog post by Armen Vardanyan',
      });
    }),
  );

  constructor(
    private readonly route: ActivatedRoute,
    private readonly title: Title,
    private readonly meta: Meta,
  ) {
    
  }

  ngAfterViewInit(): void {
    afterNextRender(() => {
      const script = document.createElement('script');
      script.src = 'https://platform.twitter.com/widgets.js';
      // script.async = true;
      document.body.appendChild(script);
    }, {injector: this.injector});
  }
}


