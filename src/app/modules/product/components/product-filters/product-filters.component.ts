import { Component } from '@angular/core';
import { Tag } from '../../interfaces/tag.interface';
import { ProductService } from '../../services/product.service';
import { ProductStateService } from '../../services/product-state.service';
import { queryParams } from '../../interfaces/queryParams.interface';

@Component({
  selector: 'app-product-filters',
  templateUrl: './product-filters.component.html',
  styleUrls: ['./product-filters.component.css'],
})
export class ProductFiltersComponent {
  searchParam: string = '';
  selectedPrice: string = '';
  tagsList: Tag[] = [
    { name: 'technology', completed: false, color: 'accent' },
    { name: 'clothing', completed: false, color: 'accent' },
    { name: 'food', completed: false, color: 'accent' },
  ];

  constructor(
    private productService: ProductService,
    private productStateService: ProductStateService
  ) {}

  applyFilters() {
    let queryParams: queryParams = {};
    if (this.searchParam) {
      queryParams.searchTerm = this.searchParam;
    }
    if (this.selectedPrice && this.selectedPrice !== 'all') {
      const [min, max] = this.selectedPrice.split('-');
      if (min) queryParams.minPrice = +min;
      if (max && max !== '+') queryParams.maxPrice = +max;
      else if (max === '+') {
        queryParams.maxPrice = 1000;
        queryParams.maxPrice = 1000000;
      }
    }
    const selectedTags = this.tagsList
      .filter((tag) => tag.completed)
      .map((tag) => tag.name);
    if (selectedTags.length > 0) {
      queryParams.tags = selectedTags;
    }

    this.productService.getProducts(queryParams).subscribe((products) => {
      this.productStateService.updateProducts(products);
    });
  }
}
