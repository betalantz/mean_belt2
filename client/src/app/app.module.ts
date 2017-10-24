import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BidsComponent } from './bids/bids.component';
import { ResultsComponent } from './results/results.component';
import { Prod1Component } from './bids/prod1/prod1.component';
import { Prod2Component } from './bids/prod2/prod2.component';
import { Prod3Component } from './bids/prod3/prod3.component';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BidsComponent,
    ResultsComponent,
    Prod1Component,
    Prod2Component,
    Prod3Component,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
