import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: []
})
export class ChildComponent {
  @Input() childMessage: string;
  
  constructor() {
    this.childMessage = '';
  }
}
