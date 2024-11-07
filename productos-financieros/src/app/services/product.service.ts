import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductDTO } from 'src/dto/Product';
import { ProductInterface } from 'src/interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiURL = 'http://localhost:3002/bp/products'
  constructor(private http: HttpClient) { }

  getProducts(): Observable<ProductInterface[]>{
    return this.http.get<ProductInterface[]>(this.apiURL);
  }

  createProducts(product: Omit<ProductDTO, 'id'>): Observable<ProductInterface>{
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
