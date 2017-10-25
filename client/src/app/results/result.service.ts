import { Injectable } from '@angular/core';
import { Http } from '@angular/http'

import "rxjs"
import "rxjs/Rx"
import "rxjs/add/operator/map"

import { Product } from './../bids/product'

@Injectable()
export class ResultService {

  constructor(private _http: Http) { }

  login_stat() {
    return this._http.get("/login_stat").map(data => data.json()).toPromise()
  }
  getProducts() {
    return this._http.get("/getProducts").map(data => data.json()).toPromise()
  }
  start_bids() {
    return this._http.get("/reset").map(data => data.json()).toPromise()
  }
}
