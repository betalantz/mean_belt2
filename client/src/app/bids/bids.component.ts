import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"
import { FormsModule } from '@angular/forms';

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
  bidAmt1: number
  bidAmt2: number
  bidAmt3: number
  products: Array<Product>
  prod_id
  lowAlert: boolean = false

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
    let bidSet = this.products[0].bids
    if (this.bidAmt1 < 1 || this.bidAmt1 == null) {return}
    if (bidSet.length){
      let highest = bidSet[bidSet.length-1].amount
      console.log("The most recent bid was", highest);
      if (this.bidAmt1 <= highest) {
        this.lowAlert = true
        return
      }
    }
    this.prod_id = this.products[0]._id
    console.log(this.prod_id);
    this._bidservice.makeBid(this.prod_id, this.bidAmt1)
      .then(() => this._bidservice.getProducts()
        .then(products => {
          console.log(products);
          this.lowAlert = false
          this.products = products
        })
        .catch(err => console.log('Error in getProducts', err)))
      .catch(err => console.log('makeBid error on comp', err))
  }
  makeBid2() {
    console.log("bid pressed");
    let bidSet = this.products[1].bids
    if (this.bidAmt2 < 1 || this.bidAmt2 == null) {return}
    if (bidSet.length){
      let highest = bidSet[bidSet.length-1].amount
      console.log("The most recent bid was", highest);
      if (this.bidAmt2 <= highest) {
        this.lowAlert = true
        return
      }
    }
    this.prod_id = this.products[1]._id
    console.log(this.prod_id);
    this._bidservice.makeBid(this.prod_id, this.bidAmt2)
      .then(() => this._bidservice.getProducts()
        .then(products => {
          console.log(products);
          this.lowAlert = false
          this.products = products
        })
        .catch(err => console.log('Error in getProducts', err)))
      .catch(err => console.log('makeBid error on comp', err))
  }
  makeBid3() {
    console.log("bid pressed");
    let bidSet = this.products[2].bids
    if (this.bidAmt3 < 1 || this.bidAmt3 == null) {return}
    if (bidSet.length){
      let highest = bidSet[bidSet.length-1].amount
      console.log("The most recent bid was", highest);
      if (this.bidAmt3 <= highest) {
        this.lowAlert = true
        return
      }
    }
    this.prod_id = this.products[2]._id
    console.log(this.prod_id);
    this._bidservice.makeBid(this.prod_id, this.bidAmt3)
      .then(() => this._bidservice.getProducts()
        .then(products => {
          console.log(products);
          this.lowAlert = false
          this.products = products
        })
        .catch(err => console.log('Error in getProducts', err)))
      .catch(err => console.log('makeBid error on comp', err))
  }
  endBid() {
    let bidSet1 = this.products[0].bids
    let bidSet2 = this.products[1].bids
    let bidSet3 = this.products[2].bids
    if (!bidSet1.length || !bidSet2.length || !bidSet3.length) {
      alert("Cannot end the bid.\n Not all products have bids yet.")
      this._router.navigate(["/bids"])  
    } else {
    this._router.navigate(["/results"])
    }
  }
}
