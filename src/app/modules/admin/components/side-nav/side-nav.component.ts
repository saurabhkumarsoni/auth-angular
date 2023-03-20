import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
@Input() sideNavStatus: boolean = false;



  list = [
    {
      number: 1,
      name: 'home',
      icon: 'fa-solid fa-house'
    },
    {
      number: 2,
      name: 'analytics',
      icon: 'fa-solid fa-chart-line'
    },
    {
      number: 3,
      name: 'products',
      icon: 'fa-solid fa-box'
    },
    {
      number: 4,
      name: 'Order',
      icon: 'fa-solid fa-cart-shopping'
    },
    {
      number: 6,
      name: 'Setting',
      icon: 'fa-solid fa-gear'
    },
    {
      number: 7,
      name: 'Contact',
      icon: 'fa-solid fa-phone'
    },
    {
      number: 8,
      name: 'About',
      icon: 'fa-solid fa-circle-info'
    },
    {
      number: 9,
      name: 'profile',
      icon: 'fa-solid fa-camera'
    },

  ]

  constructor() { }

  ngOnInit(): void {
  }



}
