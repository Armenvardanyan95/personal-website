import { NgOptimizedImage } from '@angular/common';
import {
    ChangeDetectorRef,
    Directive,
    HostListener,
    inject,
    SimpleChanges,
} from '@angular/core';

@Directive({
  selector: 'img',
  standalone: true,
})
export class DefaultImageDirective {
  image = inject(NgOptimizedImage);
  cdRef = inject(ChangeDetectorRef);

  @HostListener('error', ['$event'])
  onError(event: Event) {
    this.image.ngSrc = '/assets/images/default.png';
    (event!.target! as HTMLImageElement).src = '/assets/images/default.png';
    const changes = {
      ngSrc: {
        firstChange: false,
        isFirstChange: () => false,
        previousValue: undefined,
        currentValue: '/assets/images/default.png',
      },
    } satisfies SimpleChanges;
    this.image.ngOnChanges(changes);
  }
}
