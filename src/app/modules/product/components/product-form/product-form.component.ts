import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MyErrorStateMatcher } from '../../helpers/MyErrorStateMatcher';
import { ProductService } from '../../services/product.service';
import { ProductPayload } from '../../interfaces/ProductPayload.interface';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent {
  productForm = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    sku: new FormControl('', Validators.required),
    imageUrl: new FormControl('', Validators.required),
    tags: new FormArray([]),
    price: new FormControl('', [
      Validators.required,
      Validators.min(0),
      Validators.pattern(/^\d+(\.\d{1,2})?$/),
    ]),
    stock: new FormControl('', [
      Validators.required,
      Validators.min(0),
      Validators.pattern(/^\d+$/),
    ]),
    priceHistory: new FormArray([]),
    stockHistory: new FormArray([]),
  });
  matcher = new MyErrorStateMatcher();

  @Output() productSubmit = new EventEmitter<any>();

  constructor(private fb: FormBuilder, private productService: ProductService) {
    this.productForm.get('name')!.valueChanges.subscribe((name) => {
      this.productForm.get('sku')!.setValue(this.generateSKU(name || ''));
    });
  }

  onSubmit() {
    if (this.productForm.valid) {
      this.productService
        .createProduct(this.prepareDataForSubmission())
        .subscribe(
          (response) => {
            console.log('Producto creado con éxito', response);
          },
          (error) => {
            console.error('Error al crear el producto', error);
          }
        );
    }
  }

  get tags() {
    return this.productForm.get('tags') as FormArray;
  }

  addTag() {
    console.log('addTag');
    this.tags.push(new FormControl(''));
  }

  removeTag(index: number) {
    this.tags.removeAt(index);
  }

  generateSKU(name: string): string {
    return encodeURIComponent(name.replace(/\s+/g, '_')).slice(0, 30);
  }

  prepareDataForSubmission(): ProductPayload {
    const formData = this.productForm.value;
    return {
      name: formData.name || '',
      description: formData.description || '',
      sku: formData.sku || '',
      imageUrl: formData.imageUrl || '',
      tags: formData.tags || [],
      price:
        typeof formData.price === 'string'
          ? parseFloat(formData.price)
          : typeof formData.price === 'number'
          ? formData.price
          : 0,
      stock:
        typeof formData.stock === 'string'
          ? parseInt(formData.stock, 10)
          : typeof formData.stock === 'number'
          ? formData.stock
          : 0,
      priceHistory: formData.priceHistory || [],
      stockHistory: formData.stockHistory || [],
    };
  }
}
