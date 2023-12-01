import { Component, OnInit } from '@angular/core';

import data from '../../../assets/content/snippets.json';
import { MarkdownModule } from 'ngx-markdown';
import { MatCardModule } from '@angular/material/card';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-code-snippets',
    template: `
    <div class="container">
  <h1>Code Snippets</h1>
  <p>
    Here I present interesting use cases with short snippets of code that solve
    those problems
  </p>

  @for (snippet of snippets; track snippet) {
  <mat-card>
    <mat-card-header>
      <mat-card-title>{{ snippet.title }}</mat-card-title>
      <mat-card-subtitle>
        {{ snippet.description }}
      </mat-card-subtitle>
    </mat-card-header>
    <mat-card-content>
      <markdown [src]="snippet.path" lineNumbers></markdown>
    </mat-card-content>
  </mat-card>
}

</div>
    `,
    styleUrls: ['./code-snippets.component.scss'],
    standalone: true,
    imports: [NgFor, MatCardModule, MarkdownModule]
})
export class CodeSnippetsComponent implements OnInit {

  snippets = data;

  constructor() { }

  ngOnInit(): void {
  }

}
