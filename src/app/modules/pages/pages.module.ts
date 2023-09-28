import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './components/home-page/home-page.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductModule } from '../product/product.module';
import { DetailPageComponent } from './components/detail-page/detail-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NewProductComponent } from './components/new-product/new-product.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'product/:id', component: DetailPageComponent },
  { path: 'new-product', component: NewProductComponent },
  { path: 'update-product/:id', component: NewProductComponent },
];

@NgModule({
  declarations: [HomePageComponent, DetailPageComponent, NewProductComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ProductModule,
    SharedModule,
  ],
  exports: [HomePageComponent, DetailPageComponent],
})
export class PagesModule {}
