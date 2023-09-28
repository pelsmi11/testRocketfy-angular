import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { GetProduct } from '../../interfaces/getProduct.interface';
import { ProductStateService } from '../../services/product-state.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products: GetProduct[] = [];

  constructor(
    private productService: ProductService,
    private productStateService: ProductStateService
  ) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });

    this.productStateService.products$.subscribe((products) => {
      this.products = products;
    });
  }
}
