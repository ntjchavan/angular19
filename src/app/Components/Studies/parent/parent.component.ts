import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { TestserviceService } from '../../Services/testservice.service';

@Component({
  selector: 'app-parent',
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
})
export class ParentComponent implements OnInit {

  childComponentData: string = "Hello, I am from Parent component";
  parentComponentData: string = '';
  constructor(private testService: TestserviceService) {

  }

  ngOnInit(): void {
    
  }

  GetDataFromChildComponent(data: string) {
    this.parentComponentData = data;
  }

  SendDataService() {
    console.log('in parent component for services');
    this.testService.UpdateMessage('From Parent component');
    this.testService.UpdateSubject('From parent component to subject');
  }

}
