import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BidsComponent } from './bids/bids.component';
import { ResultsComponent } from './results/results.component'
import { LoginComponent } from './login/login.component'
 
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'bids', component: BidsComponent },
  { path: 'results', component: ResultsComponent }, 
  { path: '', pathMatch: 'full', redirectTo: '/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
