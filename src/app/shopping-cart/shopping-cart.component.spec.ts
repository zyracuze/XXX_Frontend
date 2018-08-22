import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartComponent } from './shopping-cart.component';

describe('ShoppingCartComponent', () => {
  let component: ShoppingCartComponent;
  let fixture: ComponentFixture<ShoppingCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should Total is equals to sum of products price.',() => {
    const mockInput = [{
      name: 'Sailboat',
      quantity:1,
      price:24.95,
      status:'In-stock'
    },{
      name: 'Scrabble',
      quantity:1,
      price:19.95,
      status:'In-stock'
    }];

    component.ngOnInit();
    
    expect(component.subTotal).toBe(24.95+19.95);

    // const expectedOutput = {
    //   shippingCost: ,
    //   items:[{
    //   name: 'Sailboat',
    //   Qty:1,
    //   price:24.95,
    //   status:'In-stock'
    // },{
    //   name: 'Scrabble',
    //   Qty:1,
    //   price:19.95,
    //   status:'In-stock'
    // }]};

  });


});
