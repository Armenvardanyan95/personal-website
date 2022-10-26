import { Component, OnInit } from '@angular/core';

import data from '../../../assets/content/snippets.json';

@Component({
  selector: 'app-code-snippets',
  templateUrl: './code-snippets.component.html',
  styleUrls: ['./code-snippets.component.scss']
})
export class CodeSnippetsComponent implements OnInit {

  snippets = data;

  constructor() { }

  ngOnInit(): void {
  }

}
