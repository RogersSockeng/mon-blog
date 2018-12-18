import {Component, Input, OnInit} from '@angular/core';
import {variable} from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() titlePost: string;
  @Input() contentPost: string;
  loveIts = 0;
  created_at = new Promise(
    (resolve, reject) => {
      const date = new Date();
      setTimeout(
        () => {
          resolve(date);
        }, 1000
      );
    }
  );
  constructor() {
  }

  ngOnInit() {
  }

  loveIt() {
    this.loveIts = this.loveIts + 1;
    return (this.loveIts);
  }

  dontLoveIt() {
    this.loveIts = this.loveIts - 1;
    return (this.loveIts);
  }

  getColor() {
    if (this.loveIts > 0) {
      return 'green';
    } else if (this.loveIts < 0) {
      return 'red';
    }
  }
}
