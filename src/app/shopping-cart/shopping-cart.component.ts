import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  subTotal : number = 0;
  products : Product[];
  constructor(private cartService: CartService) {

  }

  ngOnInit() : void {
    this.products = this.cartService.getAllProduct();
    this.subTotal = this.calculateSubtotal(this.products);
  }

  calculateSubtotal(products) : number {
    let total = 0
    for(let i = 0 ; i < products.length ;i++){
      total += products[i].price;
    }
    return total;
  }

}
