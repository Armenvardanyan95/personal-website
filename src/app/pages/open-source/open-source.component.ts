import { AfterViewInit, Component, OnInit } from '@angular/core';

declare let GitHubCalendar: any;

@Component({
    selector: 'app-open-source',
    templateUrl: './open-source.component.html',
    styleUrls: ['./open-source.component.scss'],
    standalone: true
})
export class OpenSourceComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {
    GitHubCalendar('#github-calendar', 'armenvardanyan95', {responsive: true});
  }

}
