import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { DataAccessService } from 'src/app/services/data-access.service';
import { IDb } from 'src/app/shared/models/idb';
import { IModule } from 'src/app/shared/models/imodule';
import { IProduct } from 'src/app/shared/models/Iproduct';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {

  //Kanske göra stock till observable pipe async i html.
  //Istället för stock, ta articlenr som input och sätt som pipe async.

  //@Input() stock!: any;
  @Input() articleNr!: string;

  products!: Observable<IProduct[]>;
  //stock!: Observable<number>;
  inStock: boolean = false;

  product!: IProduct;

  stock!: any;

  constructor(
    private dataAccess: DataAccessService
  ) { }

  //Använd local storage för att spara en product i cart. Hantera flera av samma, lagersaldo, slut på lager osv.
  //Kanske behöver en cart service som hanterar observables, tex antal varor i korgen som visas i header?
  addToCart() {
    //Uppdatera lagersaldo
    
    alert("Added to cart")
  }

  ngOnInit(): void {

    this.dataAccess.dbSingleProduct(this.articleNr).pipe(map(item => item)).subscribe(
      item => this.product = item
    ); 
  }

}
