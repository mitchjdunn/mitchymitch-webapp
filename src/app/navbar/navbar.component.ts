import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import {NavbarButton} from "./navbar-button";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  buttons: NavbarButton[] = [
    {label: "home", route: "/"},
    {label: "todo", route: "/todo"},
    {label: "finance", route: "/finance"},
  ]

  filter='all';

  selectedButton(): NavbarButton {
    console.log(this.router.url);
    return this.buttons.filter(a => a.route === this.router.url)[0];
  }

  ngOnInit(): void {
  }


}
