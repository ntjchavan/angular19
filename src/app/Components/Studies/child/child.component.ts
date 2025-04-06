import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent implements OnInit {

  @Input() fromParentComponent!: string;
  @Output() fromChildComponent = new EventEmitter<string>();

  constructor() {

  }

  ngOnInit(): void {
    
  }

  SendDataToParent() {
    this.fromChildComponent.emit('Hello, I am from Child component');
  }

}
