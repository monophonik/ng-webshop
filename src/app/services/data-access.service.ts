import { ErrorHandler, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { IProduct } from 'src/app/shared/models/Iproduct';

import { Observable, throwError } from 'rxjs';
import { catchError, retry, map, filter } from 'rxjs/operators';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { IDb } from '../shared/models/idb';

@Injectable({
  providedIn: 'root'
})
export class DataAccessService {

  //private url: string = 'assets/db/db.json';
  private url: string = 'http://localhost:3000';
  private url2: string = 'C:/users/Ny Användare/OneDrive/Skrivbord/Web/webshop-ng/ng-webshop/src/mock-data/db.json';

  //private products: any;

  constructor(
    private http: HttpClient
  ) { }


  db(): Observable<IDb> {
    return this.http.get<IDb>(this.url);
    //return this.products;
  }

  dbProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${this.url}/products`);
    //return this.products;
  }

  dbSingleProduct(id: number): Observable<IProduct> {
    return this.http.get<IProduct>(`${this.url}/products/${id}`);
  }

  //Funkar IProduct?
  addProduct(product: any) {
    
    var headers = new HttpHeaders().set('Content-Type', 'application/json');
    //Med eller utan /products ?
    this.http.post(`${this.url}/products`, product, { headers: headers }).subscribe();
  }

  updateProduct(id: number, toUpdate: string) {
    var headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.http.patch(`${this.url}/products/${id}`, toUpdate, { headers: headers }).subscribe();
  }

  updateStock(id: number, amount: number) {
    var headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.http.patch(`${this.url}/products/${id}`, { 'stock': amount }, { headers: headers }).subscribe();
  }


  showcaseProductsWithMap() {
    return this.http.get(this.url).pipe(map((response: any) => response)) //Kanske ta bort <JSON>?

    //Med IProduct array!
    //return this.http.get<IProduct[]>(this.url).pipe(map((response: any) => response.json)) //Kanske ta bort <JSON>?
  }


  //Slå ihop showcaseModules och allModules!

  //Return json or iproduct array?
  showcaseModules(): Observable<JSON[]> {
    let data: any;
    data = this.http.get<JSON[]>(this.url);
    //console.log(data.toString())
    return data.modules;
  }

  allModules(): Observable<JSON[]> {
    let data: any;
    data = this.http.get<JSON[]>(this.url);
    //console.log(data.toString())
    return data.modules;
  }
}
