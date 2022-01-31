import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  //private products: any;

  constructor(
    private http: HttpClient
  //   private options: {
  //   observe?: 'response', //eller 'body'
  //   responseType: 'json'
  // }
  ) { }

  // Funkar ej med async pipe i html
  // showcaseProducts(): Observable<any> {
  //   return this.http.get(this.url).pipe(map((data) => {
  //     this.products = data;
  //     console.log("Data access result: " + this.products)
  //     return data;
  //   }));
  //   //return this.products;
  // }

  db(): Observable<IDb> {
    return this.http.get<IDb>(this.url);
    //return this.products;
  }

  dbProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${this.url}/products`);
    //return this.products;
  }

  dbSingleProduct(articleNr: string): Observable<IProduct> {
    return this.http.get<IProduct>(`${this.url}/products/${articleNr}`);
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
