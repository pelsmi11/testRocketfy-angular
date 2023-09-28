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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { NewProductComponent } from '../pages/components/new-product/new-product.component';
import { ProductFiltersComponent } from './components/product-filters/product-filters.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
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
    ProductFiltersComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatRippleModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatButtonModule,
    FormsModule,
    MatMenuModule,
    MatIconModule,
    MatSelectModule,
  ],
  exports: [
    ProductListComponent,
    ProductDetailComponent,
    DeleteProductComponent,
    ProductFormComponent,
    ProductFiltersComponent,
  ],
})
export class ProductModule {}
