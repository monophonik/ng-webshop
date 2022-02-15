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

  constructor(
    private http: HttpClient
  ) { }


  db(): Observable<IDb> {
    return this.http.get<IDb>(this.url);
  }

  dbProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${this.url}/products`);
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

}
