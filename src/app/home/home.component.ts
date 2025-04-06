import { Component, OnInit } from '@angular/core';
import { CustomStyleDirective } from '../Directives/custom-style.directive';
import { NgForOf, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CustomStyleDirective, UpperCasePipe, NgForOf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  names: string[] = ['Netaji', 'Shivam', 'Punam', 'Pradnya'];

  constructor() {}

  ngOnInit(): void {
    
  }
}
