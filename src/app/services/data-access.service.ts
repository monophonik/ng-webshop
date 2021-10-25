import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataAccessService {

  private url: string = 'ng-webshop\src\db\db.json';

  constructor(
    private http: HttpClient,
    private options: {
    observe: 'response', //eller 'body'
    responseType: 'json'
  }) { }

  showcaseProducts() {
    return this.http.get<JSON>(this.url, this.options); //Kanske ta bort <JSON>?
  }
}
