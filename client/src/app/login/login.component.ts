import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"

import { BidService } from './../bids/bid.service'
import { User } from './../user'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User

  constructor(private _bidservice: BidService, private _router: Router) { }

  ngOnInit() {
    this.user = new User
  }
  login() {
    this._bidservice.create(this.user)
    .then(() => this._router.navigate(["/bids"]) )
    .catch(err => console.log("user login error", err))
  }
}
