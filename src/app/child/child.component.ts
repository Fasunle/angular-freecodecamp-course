import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: []
})
export class ChildComponent {
  // we create an event which can be subsribed to on the parent. This will notify the parent whenever the event is fired.
  @Output() messageEvent = new EventEmitter<string>();
  
  constructor() {}

  sendMessage() {
    this.messageEvent.emit( 'Hello from child component' );
  }
}
