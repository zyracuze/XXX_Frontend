import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  products: Product[] = [];
  constructor() { }

  addProduct(product : Product){
    this.products.push(product)
  }

  removeProduct(product: Product){
    this.products.slice(this.products.indexOf(product),1)
  }

  getAllProduct(): Product[] {
    return this.products;
  }
}