import { Injectable } from '@angular/core';
import { Http } from '@angular/http'

import "rxjs"
import "rxjs/Rx"
import "rxjs/add/operator/map"

import { Product } from './product'

@Injectable()
export class BidService {

  constructor(private _http: Http) { }

  create(user){
    return this._http.post("/login", user).map(data => data.json()).toPromise()
  }
  login_stat() {
    return this._http.get("/login_stat").map(data => data.json()).toPromise()
  }
  getProducts() {
    return this._http.get("/getProducts").map(data => data.json()).toPromise()
  }
  makeBid(pdid, amt) {
    console.log('Data in service', pdid, amt);
    return this._http.post("/makeBid", {id:pdid, amount:amt}).map(data => data.json()).toPromise()
  }
}
