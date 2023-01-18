import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { combineLatest, fromEvent, merge } from 'rxjs';
import { filter, map, startWith, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  hasScroll$ = merge(
    fromEvent(document.body, 'wheel'),
    fromEvent(document.body, 'scroll')
  ).pipe(
    map(() => window.pageYOffset > 0),
    startWith(false)
  );
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

  currentRoute$ = this.router.events.pipe(
    filter((event) => event instanceof NavigationEnd),
    map((event) => (event as NavigationEnd).url),
    startWith('/')
  );
  windowWidth$ = fromEvent(window, 'resize').pipe(
    map(() => window.innerWidth),
    startWith(window.innerWidth)
  );
  sideBarVisible$ = combineLatest([
    this.windowWidth$.pipe(map((width) => width > 768)),
    this.currentRoute$.pipe(map((route) => route.startsWith('/blog/'))),
  ]).pipe(
    map(([isDesktop, isblogPost]) => !(!isDesktop && isblogPost)),
    startWith(true),
  );

  constructor(
    private readonly iconRegistry: MatIconRegistry,
    private readonly sanitizer: DomSanitizer,
    private readonly router: Router
  ) {
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
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd && event.url !== '/') {
        const [, h1] = Array.from(document.querySelectorAll('h1'));
        if (h1) {
          setTimeout(() => {
            h1.scrollIntoView({ behavior: 'smooth' });
          }, 500);
        }
      }
    });
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.body.dispatchEvent(new Event('wheel'));
  }
}
