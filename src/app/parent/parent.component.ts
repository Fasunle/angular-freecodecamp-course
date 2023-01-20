import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: []
})
export class ParentComponent {
  receiveMessage( message: string ) {
    alert(message)
  }
}
