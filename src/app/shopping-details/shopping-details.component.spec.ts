import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingDetailsComponent } from './shopping-details.component';

describe('ShoppingDetailsComponent', () => {
  let component: ShoppingDetailsComponent;
  let fixture: ComponentFixture<ShoppingDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
