import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public data: Array<string> = [
    "My Profile",
    "Buy",
    "Sell",
    "Account Settings",
    "Support",
    "Log Out",
  ];

}
