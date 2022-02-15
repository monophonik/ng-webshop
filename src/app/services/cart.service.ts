import { Injectable } from '@angular/core';
import { IProduct } from '../shared/models/Iproduct';
import { DataAccessService } from './data-access.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  product!: IProduct;

  constructor(private dataAccess: DataAccessService) { }

  //SE ÖVER kanske ej funkar som service...

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

  removeItem(id: number) {

  }

  checkExpiration() {

    let getExpire = localStorage.getItem("expire");

    if (getExpire) {

    }
    
  }
}
