import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
})
export class ParentComponent implements OnInit {

  childComponentData: string = "Hello, I am from Parent component";
  parentComponentData: string = '';
  constructor() {

  }

  ngOnInit(): void {
    
  }

  GetDataFromChildComponent(data: string) {
    this.parentComponentData = data;
  }

}
