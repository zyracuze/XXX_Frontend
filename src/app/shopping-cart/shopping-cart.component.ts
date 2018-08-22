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

  ngOnInit() : void {
    const products = [{
      name: 'Sailboat',
      Qty:1,
      price:24.95,
      status:'In-stock'
    },{
      name: 'Scrabble',
      Qty:1,
      price:19.95,
      status:'In-stock'
    }];
    this.subTotal = this.calculateSubtotal(products);
  }

  calculateSubtotal(products) : number {
    let total = 0
    for(let i = 0 ; i < products.length ;i++){
      total += products[i].price;
    }
    return total;
  }

}
