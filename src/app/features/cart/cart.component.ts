import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataAccessService } from 'src/app/services/data-access.service';
import { IProduct } from 'src/app/shared/models/Iproduct';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  productsId: number[] = [];
  cartProducts: IProduct[] = [];
  products$!: Observable<IProduct>[];

  constructor(
    private dataAccess: DataAccessService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    //Flytta till CartService???
    let getProducts;
    getProducts = localStorage.getItem("cart");
    console.log("Localstorage get: " + getProducts);

    if (getProducts) {
      console.log("getProducts == true");
      this.productsId = JSON.parse(getProducts);
      console.log("productsId array (after JSON.parse): " + this.productsId.toString());
      let arr = [1, 1, 4, 2];
      console.log(arr);
      console.log("");
      this.productsId.forEach(id => {
        console.log("Inne i forEach. Id: " + id);
        //Testa utan subscribe på slutet
        this.dataAccess.dbSingleProduct(id).pipe(map(item => {console.log("Inne i observable. Item: " + item.articlenr), this.cartProducts.push(item), console.log("Products in cart: " + this.cartProducts);})).subscribe();
      });
      
      //this.products$ = this.dataAccess.dbProducts().pipe(map(product => { }));
    }
  }

}
