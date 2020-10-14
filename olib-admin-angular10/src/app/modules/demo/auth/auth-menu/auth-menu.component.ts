import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'olib-auth-menu',
  templateUrl: './auth-menu.component.html',
  styleUrls: ['./auth-menu.component.scss']
})
export class AuthMenuComponent implements OnInit {
  sourceProducts = [];
    
  targetProducts = [];

  constructor() { }

  ngOnInit(): void {
    this.sourceProducts.push("Dashboard");
    this.sourceProducts.push("Search");
    this.sourceProducts.push("Register");
    this.sourceProducts.push("Login");
    this.sourceProducts.push("Auth");
  }

}
