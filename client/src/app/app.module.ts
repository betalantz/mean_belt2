import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BidsComponent } from './bids/bids.component';
import { ResultsComponent } from './results/results.component';
import { FilterPipe } from './filter.pipe';

import { BidService } from './bids/bid.service'
import { ResultService } from './results/result.service';
import { LoginComponent } from './login/login.component'

@NgModule({
  declarations: [
    AppComponent,
    BidsComponent,
    ResultsComponent,
    FilterPipe,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
  ],
  providers: [BidService, ResultService],
  bootstrap: [AppComponent]
})
export class AppModule { }
