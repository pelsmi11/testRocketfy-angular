import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-to-new-product',
  templateUrl: './to-new-product.component.html',
  styleUrls: ['./to-new-product.component.css'],
})
export class ToNewProductComponent {
  constructor(private router: Router) {}
  toNewProductPage() {
    this.router.navigate(['/new-product']);
  }
}
