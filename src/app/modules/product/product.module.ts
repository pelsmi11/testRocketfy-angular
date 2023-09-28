import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { RouterModule, Routes } from '@angular/router';
import { MatRippleModule } from '@angular/material/core';
import { DetailPageComponent } from '../pages/components/detail-page/detail-page.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { DeleteProductComponent } from './components/delete-product/delete-product.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { NewProductComponent } from '../pages/components/new-product/new-product.component';

const routes: Routes = [
  { path: 'product/:id', component: DetailPageComponent },
  { path: 'update-product/:id', component: NewProductComponent },
];

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    DeleteProductComponent,
    ProductFormComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatRippleModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
  ],
  exports: [
    ProductListComponent,
    ProductDetailComponent,
    DeleteProductComponent,
    ProductFormComponent,
  ],
})
export class ProductModule {}
