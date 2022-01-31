import { Component, OnInit } from '@angular/core';
import { ILink } from 'src/app/shared/models/Ilink';
// import { AppRoutingModule } from 'src/app/app-routing.module';
// import { RouterModule, Routes } from '@angular/router';
// import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title: string = 'Modular Maze';
  testData: string = 'blablatest';
  
  //Ta bort title eller name?
  navData: ILink[] = [
    {
      name: 'Modules',
      title: 'Modules',
      path: '/modules'
    },
    {
      name: 'Eurorack Cases',
      title: 'Eurorack Cases',
      path: '/cases'
    },
    {
      name: 'Start',
      title: 'Start',
      path:'/home'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
