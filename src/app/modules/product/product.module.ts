import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { RouterModule, Routes } from '@angular/router';
import { MatRippleModule } from '@angular/material/core';
import { DetailPageComponent } from '../pages/components/detail-page/detail-page.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { DeleteProductComponent } from './components/delete-product/delete-product.component';
import { MatDialogModule } from '@angular/material/dialog';

const routes: Routes = [
  { path: 'product/:id', component: DetailPageComponent },
];

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    DeleteProductComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatRippleModule,
    MatDialogModule,
  ],
  exports: [
    ProductListComponent,
    ProductDetailComponent,
    DeleteProductComponent,
  ],
})
export class ProductModule {}
