import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { GetProduct } from '../interfaces/getProduct.interface';
import { DeleteProduct } from '../interfaces/deleteProduct.interface';
import { ProductPayload } from '../interfaces/ProductPayload.interface';
import { queryParams } from '../interfaces/queryParams.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private API_URL = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getProducts(queryParams?: queryParams) {
    let params = new HttpParams();

    if (queryParams?.searchTerm) {
      params = params.set('searchTerm', queryParams.searchTerm);
    }

    if (queryParams?.maxPrice !== undefined) {
      params = params.set('maxPrice', queryParams.maxPrice.toString());
    }

    if (queryParams?.minPrice !== undefined) {
      params = params.set('minPrice', queryParams.minPrice.toString());
    }

    queryParams?.tags?.forEach((tag) => {
      params = params.append('tags', tag);
    });

    return this.http.get<GetProduct[]>(`${this.API_URL}/products`, { params });
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

  updateProduct(id: string, productData: ProductPayload) {
    return this.http.put(`${this.API_URL}/products/${id}`, productData);
  }
}
