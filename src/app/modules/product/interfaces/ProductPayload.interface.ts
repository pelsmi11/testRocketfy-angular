export interface ProductPayload {
  name: string;
  description: string;
  sku: string;
  imageUrl: string;
  tags: string[];
  price: number;
  stock: number;
  priceHistory?: any[];
  stockHistory?: any[];
}
