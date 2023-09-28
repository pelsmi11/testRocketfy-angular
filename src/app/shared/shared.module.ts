import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReturnButtonComponent } from './components/return-button/return-button.component';
import { ToNewProductComponent } from './components/to-new-product/to-new-product.component';

@NgModule({
  declarations: [ReturnButtonComponent, ToNewProductComponent],
  imports: [CommonModule],
  exports: [ReturnButtonComponent, ToNewProductComponent],
})
export class SharedModule {}
