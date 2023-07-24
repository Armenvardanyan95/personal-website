import { PipeTransform } from '@angular/core';
import { Pipe } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
    name: 'sanitize',
    standalone: true,
})
export class SanitizerPipe implements PipeTransform {

    constructor(
        private readonly sanitizer: DomSanitizer,
    ) {}

    transform(value: string) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(value);
    }
}