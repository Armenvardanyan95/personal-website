import { Component, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';

import data from '../../../assets/content/courses.json';
import { Tags } from 'src/app/common/tags';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
  tagMap = inject(Tags);
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
