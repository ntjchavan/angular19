import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { TestserviceService } from '../../Services/testservice.service';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent implements OnInit {

  @Input() fromParentComponent!: string;
  @Output() fromChildComponent = new EventEmitter<string>();

  fbehaviourSubject: string = '';
  fSubject: string = '';

  constructor(private testService: TestserviceService) {

  }

  ngOnInit(): void {
    this.testService.currentMessage$.subscribe((msg)=> {
      this.fbehaviourSubject = msg;
    });

    this.testService.currentss$.subscribe((msg) => {
      this.fSubject = msg;
    });
  }

  SendDataToParent() {
    this.fromChildComponent.emit('Hello, I am from Child component');
  }

}
