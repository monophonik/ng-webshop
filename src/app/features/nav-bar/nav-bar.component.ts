import { Component, Input, OnInit } from '@angular/core';
import { ILink } from 'src/app/shared/models/Ilink';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  @Input() navItems!: ILink[];

  //Ta istället emot med input från app.component
  //navItems: ILink = {name: 'item1', title: 'item2', path: 'path1'};
  //Gör interface av menylänkarna, med namn, url mm?

  constructor() { }

  ngOnInit(): void {
  }

}
