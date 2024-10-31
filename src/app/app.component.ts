import {
  AsyncPipe,
  DOCUMENT,
  NgFor,
  NgIf,
  NgOptimizedImage,
} from '@angular/common';
import { Component, OnInit, afterNextRender, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DomSanitizer } from '@angular/platform-browser';
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { Observable, combineLatest, fromEvent, merge } from 'rxjs';
import { debounceTime, filter, map, startWith } from 'rxjs/operators';
import { AnnouncementComponent } from './common/components/announcement.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    MatSidenavModule,
    MatListModule,
    NgFor,
    RouterLinkActive,
    RouterLink,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatTooltipModule,
    NgIf,
    RouterOutlet,
    AsyncPipe,
    NgOptimizedImage,
    AnnouncementComponent,
  ],
})
export class AppComponent implements OnInit {
  private readonly document = inject(DOCUMENT);
  hasScroll$!: Observable<boolean>;
  links = [
    {
      name: 'twitter',
      title: 'Twitter',
      url: 'https://twitter.com/Armandotrue',
      resource: 'assets/icons/twitter.svg',
    },
    {
      name: 'github',
      title: 'Github',
      url: 'https://github.com/Armenvardanyan95',
      resource: 'assets/icons/github.svg',
    },
    {
      name: 'linkedin',
      title: 'Linkedin',
      url: 'https://www.linkedin.com/in/armen-vardanyan-am/',
      resource: 'assets/icons/linkedin.svg',
    },
    {
      name: 'stackoverflow',
      title: 'Stack Overflow',
      url: 'https://stackoverflow.com/users/5504034/armen-vardanyan',
      resource: 'assets/icons/stackoverflow.svg',
    },
    {
      name: 'dev.to',
      title: 'Dev.to',
      url: 'https://dev.to/armandotrue',
      resource: 'assets/icons/dev-to.svg',
    },
    {
      name: 'medium',
      title: 'Medium',
      url: 'https://medium.com/@armandotrue',
      resource: 'assets/icons/medium.svg',
    },
    {
      name: 'instagram',
      title: 'Instagram',
      url: 'https://www.instagram.com/armennvardanyan/',
      resource: 'assets/icons/instagram.svg',
    },
    // {
    //   name: 'youtube',
    //   title: 'Youtube',
    //   url: '',
    //   resource: 'assets/icons/youtube.svg'
    // },
    {
      name: 'facebook',
      title: 'Facebook',
      url: 'https://www.facebook.com/exit.pain',
      resource: 'assets/icons/facebook.svg',
    },
    {
      name: 'lichess',
      title: 'Lichess',
      url: 'https://lichess.org/@/Armandotrue',
      resource: 'assets/icons/lichess.svg',
    },
    {
      name: 'email',
      title: 'Email Me',
      url: 'mailto:armenvardanyan95@gmail.com',
      resource: 'assets/icons/email.svg',
    },
  ];
  sidenavOpen = false;

  siteLinks = [
    {
      name: 'Blog',
      url: '/blog',
      icon: 'text_snippet',
    },
    {
      name: 'Podcasts',
      url: '/podcasts',
      icon: 'podcasts',
    },
    // {
    //   name: 'Open Source',
    //   url: '/open-source',
    //   icon: 'source',
    // },
    {
      name: 'Public Talks',
      url: '/public-talks',
      icon: 'public',
    },
    {
      name: 'Code Snippets',
      url: '/code-snippets',
      icon: 'code',
    },
    {
      name: 'Courses',
      url: '/courses',
      icon: 'menu_book',
    },
  ];

  currentRoute$ = this.router.events.pipe(
    filter((event) => event instanceof NavigationEnd),
    map((event) => (event as NavigationEnd).url),
    startWith('/')
  );
  windowWidth$!: Observable<number>;
  sideBarVisible$!: Observable<boolean>;

  constructor(
    private readonly iconRegistry: MatIconRegistry,
    private readonly sanitizer: DomSanitizer,
    private readonly router: Router
  ) {
    afterNextRender(() => {
      this.hasScroll$ = merge(
        fromEvent(this.document.body, 'wheel'),
        fromEvent(this.document.body, 'scroll')
      ).pipe(
        map(() => window.pageYOffset > 0),
        debounceTime(100),
        startWith(false)
      );
    });

    afterNextRender(() => {
      this.windowWidth$ = fromEvent(window, 'resize').pipe(
        map(() => window.innerWidth),
        debounceTime(100),
        startWith(window.innerWidth)
      );

      this.sideBarVisible$ = combineLatest([
        this.windowWidth$.pipe(map((width) => width > 800)),
        this.currentRoute$.pipe(map((route) => route !== '/')),
      ]).pipe(
        map(([isDesktop, isblogPost]) => !(!isDesktop && isblogPost)),
        debounceTime(100),
        startWith(true)
      );
    });
    this.links.forEach((link) => {
      this.iconRegistry.addSvgIcon(
        link.name,
        this.sanitizer.bypassSecurityTrustResourceUrl(link.resource)
      );
    });

    this.iconRegistry.addSvgIcon(
      'marker',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/marker.svg')
    );

    afterNextRender(() => {
      this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd && event.url !== '/') {
          this.sidenavOpen = false;
          const [, h1] = Array.from(document.querySelectorAll('h1'));
          if (h1) {
            setTimeout(() => {
              h1.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
                inline: 'nearest',
              });
            }, 500);
          }
        }
      });
    });
  }

  ngOnInit() {}

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    console.log('scrolling to top');
    document.body.dispatchEvent(new Event('wheel'));
  }
}

