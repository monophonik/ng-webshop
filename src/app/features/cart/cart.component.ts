import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataAccessService } from 'src/app/services/data-access.service';
import { IProduct } from 'src/app/shared/models/Iproduct';
import { TaxPipe } from 'src/app/shared/pipes/tax-pipe';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  productsId: any[] = [];
  cartProducts: IProduct[] = [];
  products$!: Observable<IProduct>[];
  getProducts: any;

  totalPrice: number = 0;
  totalPriceNoTax: number = 0;

  constructor(
    private dataAccess: DataAccessService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    //För över till CartService
    this.loadCart();

  }

  loadCart() {
    this.totalPrice = 0;
    this.getProducts = null;
    this.cartProducts.splice(0);

    this.getProducts = localStorage.getItem("cart");
    console.log("Localstorage get: " + this.getProducts);

    if (this.getProducts) {
      console.log("getProducts == true");
      this.productsId = JSON.parse(this.getProducts);
      console.log("productsId array (after JSON.parse): " + this.productsId.toString());
      let arr = [1, 1, 4, 2];
      console.log(arr);

      this.productsId.forEach(id => {
        console.log("Inne i forEach. Id: " + id);
    
        this.dataAccess.dbSingleProduct(id).pipe(map(item => {
          console.log("Inne i observable. Item: " + item.articlenr),
          this.cartProducts.push(item),
          this.totalPrice += item.price,
          console.log("Products in cart: " + this.cartProducts);
        })).subscribe();
      });

    }
  }

  removeFromCart(id: number) {

    if (this.productsId) {

      for (let i = 0; i < this.productsId.length; i++) {
        if (this.productsId[i] == id) {
          this.productsId.splice(i, 1),
            localStorage.setItem("cart", JSON.stringify(this.productsId));
          this.loadCart();
          return;
        }

      }
    }
    else {
      alert("Something went wrong")
    }

    alert(id);
  }

}
