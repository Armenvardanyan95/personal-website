import { Component, OnInit } from '@angular/core';

import data from '../../../assets/content/snippets.json';
import { MarkdownModule } from 'ngx-markdown';
import { MatCardModule } from '@angular/material/card';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-code-snippets',
    templateUrl: './code-snippets.component.html',
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
