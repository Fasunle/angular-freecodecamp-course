import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: []
})
export class ChildComponent {
  
  constructor() {
  }

  message = 'Life is great!';
}
