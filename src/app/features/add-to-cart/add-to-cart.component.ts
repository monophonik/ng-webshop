import { getLocaleWeekEndRange } from '@angular/common';
import { isNgTemplate, NodeWithI18n } from '@angular/compiler';
import { stringify } from '@angular/compiler/src/util';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { CartService } from 'src/app/services/cart.service';
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

  //@Input() stock!: any;
  //@Input() articleNr!: string;
  @Input() id!: number;

  products!: Observable<IProduct[]>;
  //stock!: Observable<number>;
  //inStock: boolean = false;

  product!: IProduct;
  stockSnapshot!: number;

  //stock!: Observable<Boolean>;
  //stockNr: any;
  //cart: any;

  constructor(
    private dataAccess: DataAccessService,
    private cart: CartService
  ) { }

  //Kanske behöver en cart service som hanterar observables, tex antal varor i korgen som visas i header?
  //Flytta till CartService
  addToCart() {
    
    console.log("Product stocks snap: " + this.product.stock);
    this.product.stock--;
    console.log("Updated product stock snap after add to cart: " + this.product.stock);
    // var update = JSON.stringify({ "stock": this.product.stock });
    // this.dataAccess.updateProduct(this.product.id, update);

    let cartStr = localStorage.getItem("cart");
    let expire = localStorage.getItem("expire");
    console.log(expire);
    let timeNow = new Date();
    let cartObj;

    if (expire) {
      console.log("expire not null")
      let expireTime = JSON.parse(expire);
      console.log("Parsed existing expire time" + expireTime)
      if (timeNow > expireTime) {
        localStorage.clear();

      }
      else {
        console.log("Cart has not expired");
        let newExpireTime = new Date();
        newExpireTime.setTime(timeNow.getTime() + (30 * 60000));
        console.log("New expire time after add" + newExpireTime);
        localStorage.setItem("expire", JSON.stringify(newExpireTime))
      }
    }
    else {

      let newExpireTime = new Date();
      newExpireTime.setTime(timeNow.getTime() + (30 * 60000));
      console.log(newExpireTime);
      localStorage.setItem("expire", JSON.stringify(newExpireTime))

    }

    if (cartStr) {
      cartObj = JSON.parse(cartStr);
      console.log("Cart in localStorage before add: " + cartObj.toString());
      cartObj.push(this.product.id);
      localStorage.setItem("cart", JSON.stringify(cartObj));
      console.log("Cart in localStorage after add: " + localStorage.getItem("cart"))
    }
    else {
      let newCart = [this.product.id]
      localStorage.setItem("cart", JSON.stringify(newCart));
      console.log("Cart in localStorage: " + localStorage.getItem("cart"));
    }

    alert("Added to cart");
  }

  ngOnInit(): void {

    this.dataAccess.dbSingleProduct(this.id).subscribe(item => this.product = item);
    //Funkar
    //this.dataAccess.dbSingleProduct(this.id).pipe(map(item => this.product = item)).subscribe();

    //uppdaterar ej dynamiskt
    // this.stock = this.dataAccess.dbSingleProduct(this.id).pipe(map(item => {

    //   if(item.stock >= 1) {
    //     console.log(item.stock)
    //     return true;
    //   }

    //   return false;
    // }));

    //this.stock.subscribe()

    //this.dataAccess.dbSingleProduct(this.id).subscribe(item => item.stock)

    // this.dataAccess.dbSingleProduct(this.id).pipe(map(item => item)).subscribe(
    //   item => this.product = item
    // ); 
  }

}
