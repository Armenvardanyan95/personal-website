import { InjectionToken } from "@angular/core";

export const TAGS = new Map<string, string>([
  ['rxjs', 'https://rxjs.dev/'],
  ['angular', 'https://angular.io/'],
  ['typescript', 'https://www.typescriptlang.org/'],
  ['ngrx', 'https://ngrx.io/'],
  ['ionic', 'https://ionicframework.com/'],
  ['capacitor', 'https://capacitorjs.com/'],
]);

export const Tags = new InjectionToken('TAGS', {
    factory() {
        return TAGS;
    },
});


