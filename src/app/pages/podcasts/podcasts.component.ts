import { Component} from '@angular/core';
import { Title } from '@angular/platform-browser';

import data from '../../../assets/content/podcasts.json'

@Component({
  selector: 'app-podcasts',
  templateUrl: './podcasts.component.html',
  styleUrls: ['./podcasts.component.scss']
})
export class PodcastsComponent {
  podcasts = data;

  constructor(private titleService: Title) {
    this.titleService.setTitle('Podcasts | Armen Vardanyan | GDE');
  }
}
