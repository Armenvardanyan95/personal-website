import { AfterViewInit, Component, afterNextRender } from '@angular/core';

declare let GitHubCalendar: any;

@Component({
    selector: 'app-open-source',
    templateUrl: './open-source.component.html',
    styleUrls: ['./open-source.component.scss'],
    standalone: true
})
export class OpenSourceComponent implements AfterViewInit {

  constructor() { 
    afterNextRender(() => {
      GitHubCalendar('#github-calendar', 'armenvardanyan95', {
        responsive: true,
      });
    });
  }

  ngAfterViewInit(): void {
    
  }

}
