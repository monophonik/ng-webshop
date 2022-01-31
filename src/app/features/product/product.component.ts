import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() articleNr!: number;

  //Sckia articlenr, eller kanske hela objektet med activatedroute???

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
