import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { CartItem } from '../models/cart.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = environment.apiUrl;
  private headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/products`);
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/products/${id}`);
  }

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.apiUrl}/products`, product, { headers: this.headers });
  }

  addProductWithImage(formData: FormData): Observable<Product> {
    return this.http.post<Product>(`${this.apiUrl}/products`, formData);
  }

  updateProductStock(productId: number, quantity: number): Observable<Product> {
    return this.http.patch<Product>(
      `${this.apiUrl}/products/${productId}`,
      { stock: quantity },
      { headers: this.headers }
    );
  }

  updateStockForItems(items: CartItem[]): Observable<boolean> {
    const updatePromises = items.map(item => 
      this.getProduct(item.productId).toPromise()
        .then(product => {
          if (product && product.stockQuantity >= item.quantity) {
            const newStock = product.stockQuantity - item.quantity;
            return this.updateProductStock(item.productId, newStock).toPromise();
          }
          throw new Error(`Stock insuffisant pour le produit ${product?.name}`);
        })
    );

    return new Observable<boolean>(observer => {
      Promise.all(updatePromises)
        .then(() => {
          observer.next(true);
          observer.complete();
        })
        .catch(error => {
          console.error('Erreur lors de la mise à jour du stock:', error);
          observer.next(false);
          observer.complete();
        });
    });
  }
}