import { Component, OnInit } from '@angular/core';
import { TestserviceService } from '../../Services/testservice.service';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-bindapidata',
  imports: [NgForOf],
  templateUrl: './bindapidata.component.html',
  styleUrl: './bindapidata.component.css'
})
export class BindapidataComponent implements OnInit {
  
  users: any = [];
  
  constructor(private testService: TestserviceService) {}

  ngOnInit(): void {
    this.GetUsers();
  }

  GetUsers() {
    this.testService.GetDummyUsers().subscribe((data: any[])=> {
      this.users = data

      console.log(this.users[0]);
    });
  }
}
