import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { GetProduct } from '../../interfaces/getProduct.interface';
import { MatDialog } from '@angular/material/dialog';
import { DeleteProductComponent } from '../delete-product/delete-product.component';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  productId: string = '';
  product?: GetProduct;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    public dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id')!;
    this.productService.getProductById(this.productId).subscribe((data) => {
      this.product = data;
    });
  }

  openDialog() {
    this.dialog.open(DeleteProductComponent, {
      data: {
        productId: this.productId,
      },
    });
  }

  onDeleteProduct() {
    const dialogRef = this.dialog.open(DeleteProductComponent, {
      data: {
        productId: this.productId,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.router.navigate(['/']);
      }
    });
  }

  toUpdateProduct() {
    this.router.navigate([`update-product/${this.productId}`]);
  }
}
