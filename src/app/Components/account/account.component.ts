// account.component.ts

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  isLoggedIn: boolean = false;
  user: any = {}; 
  orderHistory: any[] = []; 

  login() {
    this.user = { name: 'John Doe', email: 'johndoe@example.com' };
    this.orderHistory = [
      { id: 1, total: 100.0 /* ...more order details */ },
      { id: 2, total: 75.5 /* ...more order details */ }
    ];
    this.isLoggedIn = true;
  }

  updateProfile() {
  }

  constructor() {}

  ngOnInit(): void {
  }
}
