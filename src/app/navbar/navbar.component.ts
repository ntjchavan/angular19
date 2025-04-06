import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  notifications = [
    { message: 'Hello, Netaji', time: '2m ago', isRead: false },
    { message: 'Welcome Shivam', time: '3m ago', isRead: false }
  ]
  
  constructor(){

  }

  ngOnInit(): void {
    
  }

  notificationItemSelected(item: string) {
    console.log(`Notification selected item ${ item }`);
  }

}
