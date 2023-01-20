import { Component, ViewChild, AfterViewInit } from '@angular/core';
import {ChildComponent} from '../child/child.component'
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: []
})
export class ParentComponent implements AfterViewInit{
  @ViewChild(ChildComponent) child: any;
  ngAfterViewInit(): void {
      alert(this.child.message)
  }
}
