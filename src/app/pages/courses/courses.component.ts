import { Component, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';

import data from '../../../assets/content/courses.json';
import { Tags } from 'src/app/common/tags';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { NgFor } from '@angular/common';


@Component({
    selector: 'app-courses',
    templateUrl: './courses.component.html',
    styleUrls: ['./courses.component.scss'],
    standalone: true,
    imports: [NgFor, MatCardModule, MatTooltipModule, MatButtonModule]
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
