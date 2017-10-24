import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"

import { Product } from './product'
import { User } from './../user'
import { BidService } from './../bids/bid.service'


@Component({
  selector: 'app-bids',
  templateUrl: './bids.component.html',
  styleUrls: ['./bids.component.css']
})
export class BidsComponent implements OnInit {
  currUser: User
  bidAmt: number
  products: Array<Product>
  prod_id

  constructor(private _bidservice: BidService, private _router: Router ) { }

  ngOnInit() {
    this.inSession()
    this.getProducts()
  }
  inSession() {
    this._bidservice.login_stat()
      .then(user => this.currUser = user)
      .catch(() => this._router.navigate(["/login"]))
  }
  getProducts() {
    this._bidservice.getProducts()
    .then(products => {
      console.log(products);
      this.products = products
    })
    .catch(err => console.log('Error in getProducts', err)) 
  }
  makeBid1() {
    console.log("bid pressed");
    this.prod_id = this.products[0]._id
    console.log(this.prod_id);
    this._bidservice.makeBid(this.prod_id, this.bidAmt)
      .then(() => this._bidservice.getProducts()
        .then(products => {
          console.log(products);
          this.products = products
        })
        .catch(err => console.log('Error in getProducts', err)))
      .catch(err => console.log('makeBid error on comp', err))
  }
}
