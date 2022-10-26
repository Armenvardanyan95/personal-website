import { PipeTransform } from '@angular/core';
import { Pipe } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
    name: 'sanitize',
})
export class SanitizerPipe implements PipeTransform {

    constructor(
        private readonly sanitizer: DomSanitizer,
    ) {}

    transform(value: string) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(value);
    }
}