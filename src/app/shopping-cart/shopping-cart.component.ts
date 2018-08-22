import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  subTotal : number = 0;
  constructor() {

  }

  ngOnInit() {
    this.subTotal = this.calculateSubtotal(products);
  }

  calculateSubtotal(products) : number {
    for(let i = 0 ; i < products.length ;i++){
      this.subTotal+= products[i].price;
    }
  }

}
