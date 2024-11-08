import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ProductInterface } from '../../../../be-productos-financieros/src/interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiURL = 'http://localhost:3002/bp/products'

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any[]> {
    return this.http.get<{data: ProductInterface[]}>(this.apiURL).pipe(
      map(response => response.data)
    );
  }

  createProducts(product: Omit<ProductInterface, 'id'>): Observable<ProductInterface>{
    return this.http.post<ProductInterface>(this.apiURL, product);

  }

  updateProducts(id: string, productUpdate: Partial<ProductInterface>): Observable<ProductInterface>{
    const url = `${this.apiURL}/${id}`
    return this.http.put<ProductInterface>(url, productUpdate);
  }

  deleteProducts(id: string): Observable<{message: string}> {
    const url = `${this.apiURL}/${id}`
    return this.http.delete<{message: string}>(url);
  }


  verificationProduct(id: string) {
    const url = `${this.apiURL}/verification/${id}`
    return this.http.get<ProductInterface>(this.apiURL);
  }
}
