import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './components/home-page/home-page.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductModule } from '../product/product.module';
import { DetailPageComponent } from './components/detail-page/detail-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'product/:id', component: DetailPageComponent },
];

@NgModule({
  declarations: [HomePageComponent, DetailPageComponent],
  imports: [CommonModule, RouterModule.forChild(routes), ProductModule],
  exports: [HomePageComponent, DetailPageComponent],
})
export class PagesModule {}
