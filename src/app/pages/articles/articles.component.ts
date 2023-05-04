import { Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import data from '../../../assets/content/articles.json';
import { Tags } from 'src/app/common/tags';

type Article = {
  title: string;
  link: string;
  img: string;
  date: string;
  tags: ('rxjs' | 'angular' | 'typescript' | 'ngrx')[];
  description: string;
};

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent {
  tagMap = inject(Tags);
  articles = (data as unknown as Article[]).map(article => ({
    ...article,
    tags: article.tags.map(tag => ({
      name: tag,
      link: this.tagMap.get(tag),
    })),
  }));

  constructor(private readonly title: Title, private readonly meta: Meta) {
    this.title.setTitle('Armen Vardanyan | GDE');
    this.meta.updateTag({
      name: 'description',
      content:
        'Armen Vardanyan is a Google Developer Expert for Angular and a Lead Front End Engineer at VOLO.',
    });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://armenvardanyan.dev/',
    });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({
      property: 'og:title',
      content: 'Armen Vardanyan | GDE',
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'Armen Vardanyan is a Google Developer Expert for Angular and a Lead Front End Engineer at VOLO.',
    });
    this.meta.updateTag({
      property: 'og:image',
      content: 'https://armenvardanyan.dev/assets/images/pfp-optimized.jpg',
    });
    this.meta.updateTag({
      name: 'twitter:card',
      content: 'summary',
    });
    this.meta.updateTag({
      property: 'twitter:domain',
      content: 'armenvardanyan.dev',
    });
    this.meta.updateTag({
      property: 'twitter:url',
      content: 'https://armenvardanyan.dev/',
    });
    this.meta.updateTag({
      name: 'twitter:title',
      content: 'Armen Vardanyan | GDE',
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
      content: 'https://armenvardanyan.dev/assets/images/pfp-optimized.jpg',
    });
    this.meta.updateTag({
      name: 'twitter:card:image',
      content: 'https://armenvardanyan.dev/assets/images/pfp-optimized.jpg',
    });
    this.meta.updateTag({
      name: 'twitter:widgets:new-embed-design',
      content: 'on',
    });
    this.meta.updateTag({
      name: 'twitter:description',
      content:
        'Armen Vardanyan is a Google Developer Expert for Angular and a Lead Front End Engineer at VOLO.',
    });
    this.meta.updateTag({
      name: 'twitter:image:src',
      content: 'https://armenvardanyan.dev/assets/images/pfp-optimized.jpg',
    });
  }
}
