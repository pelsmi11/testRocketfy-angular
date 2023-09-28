import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { GetProduct } from '../interfaces/getProduct.interface';
import { DeleteProduct } from '../interfaces/deleteProduct.interface';
import { ProductPayload } from '../interfaces/ProductPayload.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private API_URL = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<GetProduct[]>(`${this.API_URL}/products`);
  }

  getProductById(id: string) {
    return this.http.get<GetProduct>(`${this.API_URL}/products/${id}`);
  }
  deleteProduct(id: string) {
    return this.http.delete<DeleteProduct>(`${this.API_URL}/products/${id}`);
  }

  createProduct(productData: ProductPayload) {
    return this.http.post(`${this.API_URL}/products`, productData);
  }
}
