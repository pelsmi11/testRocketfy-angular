import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { GetProduct } from '../interfaces/getProduct.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductStateService {
  private productsSource = new BehaviorSubject<GetProduct[]>([]);
  products$ = this.productsSource.asObservable();

  updateProducts(products: GetProduct[]) {
    this.productsSource.next(products);
  }

  constructor() {}
}
