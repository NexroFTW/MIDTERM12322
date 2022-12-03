import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppinganddiningComponent } from './shoppinganddining.component';

describe('ShoppinganddiningComponent', () => {
  let component: ShoppinganddiningComponent;
  let fixture: ComponentFixture<ShoppinganddiningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppinganddiningComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppinganddiningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
