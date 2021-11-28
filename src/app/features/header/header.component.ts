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

  testData: string = 'test';
  navData: ILink[] = [
    {
      name: 'item1',
      title: 'itemOne',
      path: 'path1'
    },
    {
      name: 'item2',
      title: 'itemTwo',
      path: 'path2'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
