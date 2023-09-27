import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { ProductService } from '../../services/product.service';
import { NgIf } from '@angular/common';

export interface DeleteDialogData {
  productId: string;
}

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css'],
})
export class DeleteProductComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DeleteDialogData,
    private productService: ProductService,
    private dialogRef: MatDialogRef<DeleteProductComponent>
  ) {}

  onDelete() {
    this.productService.deleteProduct(this.data.productId).subscribe(() => {
      this.dialogRef.close(true);
    });
  }

  onCancel() {
    this.dialogRef.close();
  }
}
