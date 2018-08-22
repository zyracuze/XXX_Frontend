import { TestBed, inject } from '@angular/core/testing';

import { CartService } from './cart.service';

describe('CartService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CartService]
    });
  });
  let service;
  beforeEach(inject([CartService], (injectedService: CartService)=>{
    service = injectedService;
  }));

  it('should Add product', () => {
    const mockProduct = {
      name: 'Sailboat',
      brand: 'CoolkidZ',
      gender:'Male',
      age:'over8',
      quantity:1,
      price:24.95,
      status:'In-stock'
    };

    service.addProduct(mockProduct);

    expect(service.products).toBe([mockProduct]); 
  })
  it('should get all product', ()=>{
    const mockProduct = {
      name: 'Sailboat',
      brand: 'CoolkidZ',
      gender:'Male',
      age:'over8',
      quantity:1,
      price:24.95,
      status:'In-stock'
    };

    let products = service.getAllProduct();

    expect(products).toBe([mockProduct]);
  })

});
