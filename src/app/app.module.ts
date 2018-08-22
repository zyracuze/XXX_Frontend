import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ShoppingDetailsComponent } from './shopping-details/shopping-details.component';

const routes: Routes = [
  { path: 'details', component: ShoppingDetailsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ShoppingCartComponent,
    ShoppingDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
