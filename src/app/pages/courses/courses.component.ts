import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

import data from '../../../assets/content/courses.json';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
  tagMap = new Map<string, string>([
    ['rxjs', 'https://rxjs.dev/'],
    ['angular', 'https://angular.io/'],
    ['typescript', 'https://www.typescriptlang.org/'],
    ['ngrx', 'https://ngrx.io/'],
  ]);
  courses = data.map(course => ({
    ...course,
    tags: course.tags.map(tag => ({
      name: tag,
      link: this.tagMap.get(tag),
    })),
  }));

  constructor(private readonly title: Title) {
    this.title.setTitle('Courses | Armen Vardanyan | GDE');
  }
}
