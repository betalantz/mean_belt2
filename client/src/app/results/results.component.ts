import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"

import { Product } from './../bids/product'
import { User } from './../user'
import { ResultService } from './result.service'

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  currUser: User
  products: Array<Product>
  highBids: Array<number> = []

  constructor(private _resultservice: ResultService, private _router: Router) { }

  ngOnInit() {
    this.inSession()
    this.getProducts()
  }
  inSession() {
    this._resultservice.login_stat()
      .then(user => this.currUser = user)
      .catch(() => this._router.navigate(["/login"]))
  }
  getProducts() {
    this._resultservice.getProducts()
    .then(products => {
      console.log(products);
      this.products = products
      for (let product of products){
        this.highBids.push(product.bids.pop())
      }
      console.log('Our high bids are', this.highBids);
    })
    .catch(err => console.log('Error in getProducts', err)) 
  }
  reset() {
    this._resultservice.start_bids()
    .then(() => this._router.navigate(["/bids"]) )
    .catch(err => console.log("reset error", err))
  }
}
