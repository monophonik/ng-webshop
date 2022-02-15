import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { observable, Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataAccessService } from 'src/app/services/data-access.service';
import { Categories } from 'src/app/shared/enums/categories';
import { IProduct } from 'src/app/shared/models/Iproduct';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  orderForm!: FormGroup;

  deliveryOptions = [{carrier: 'PostNord', price: '69'}, {carrier: 'DHL', price: '89'}]
  cartProducts: IProduct[] = [];
  getProducts: any;
  totalPrice: number = 0;
  productsId: any[] = [];
  totalShipping!: number;
  orderCompleted: boolean = false;


  private noNumbers: RegExp = /^[^0-9]+$/;
  private onlyNumbers: RegExp = /^[0-9+\s]+$/;

  constructor(
    private dataAccess: DataAccessService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) { }

  initForm() {
    this.orderForm = this.fb.group({
      firstName: ['', [
        Validators.required,
        Validators.minLength(1),
        Validators.pattern(this.noNumbers)]],
      lastName: ['', [
        Validators.required,
        Validators.minLength(1),
        Validators.pattern(this.noNumbers)]],
      street: ['', [
        Validators.required,
        Validators.minLength(1)]],
      postalcode: ['', [
        Validators.required,
        Validators.pattern(this.onlyNumbers)]],
      city: ['', [Validators.required,
        Validators.minLength(1),
        Validators.pattern(this.noNumbers)]],
      telephone: ['', [
        Validators.required,
        Validators.pattern(this.onlyNumbers)]],
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      delivery: ['', Validators.required ],
      price: ['', ],
      image: ['', ],
      description: ['', ]
    });
  }

  submitOrder() {
    console.log(this.orderForm.value);
    
    let outOfStock: boolean = false;
    this.productsId.forEach(id => {
    
      this.dataAccess.dbSingleProduct(id).subscribe(prod => {
        if (prod.stock < 1) 
          outOfStock = true;
        
      });
    })

    if (outOfStock) {
      alert("Unfortunately one or more products you are trying to order has gone out of stock.")     
      return;
    }
    else {
      this.productsId.forEach(id => {
        //let oldStok;
        console.log("Inne i forEach för patch...");
        let newStock;
        this.dataAccess.dbSingleProduct(id).subscribe(prod => {
          newStock = (prod.stock - 1);
          console.log("Old stock: " + prod.stock);
          console.log("New stock: " + newStock);
          this.dataAccess.updateStock(id, newStock);
        })
      })
    }

    this.orderForm.reset();
    localStorage.removeItem("cart");
    this.orderCompleted = true;
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

  ngOnInit(): void {
    this.initForm();
    this.loadCart();
    this.orderForm.get('delivery')?.valueChanges.subscribe(value => {
      this.totalShipping = (this.totalPrice + Number(value));
    });
  }

}
