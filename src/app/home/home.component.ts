import { Component, OnInit } from '@angular/core';
import { CustomStyleDirective } from '../Directives/custom-style.directive';
import { NgForOf, UpperCasePipe } from '@angular/common';
import { TestserviceService } from '../Components/Services/testservice.service';

@Component({
  selector: 'app-home',
  imports: [CustomStyleDirective, UpperCasePipe, NgForOf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  names: string[] = ['Netaji', 'Shivam', 'Punam', 'Pradnya'];

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
}
