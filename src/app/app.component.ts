import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts = [
    {
      title: 'Post n°1',
      content: 'Ceci est le post numéro 1.'
    },
    {
      title: 'Post n°2',
      content: 'Ceci est le post numéro 2.'
    },
    {
      title: 'Post n°3',
      content: 'Ceci est le post numéro 3.'
    }
  ];

  constructor() {
  }
}
