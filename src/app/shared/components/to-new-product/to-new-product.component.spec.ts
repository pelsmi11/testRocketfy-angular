import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToNewProductComponent } from './to-new-product.component';

describe('ToNewProductComponent', () => {
  let component: ToNewProductComponent;
  let fixture: ComponentFixture<ToNewProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToNewProductComponent]
    });
    fixture = TestBed.createComponent(ToNewProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
