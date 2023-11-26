import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { SimpleProduct } from '../interface/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient, private auth: AuthenticationService) { }

  getProducts(pageSize: number = 10, page: number = 1, searchTerm: string = ''): Observable<any> {
    const url = `${this.apiUrl}/products?pageSize=${pageSize}&page=${page}&qTitle=${searchTerm}`;
    return this.httpClient.get<any>(url, {
      headers: this.auth.getAuthHeader()
    })
  }

  getProductsById(id: number): Observable<any> {
    const url = `${this.apiUrl}/products?id=${id}`;
    return this.httpClient.get<any>(url, {
      headers: this.auth.getAuthHeader()
    });
  }

  getProductsByAsin(asin: number): Observable<any> {
    const url = `${this.apiUrl}/products/asin?asin=${asin}`;
    return this.httpClient.get<any>(url, {
      headers: this.auth.getAuthHeader()
    });
  }

  deleteProduct(id: number): Observable<boolean> {
    const url = `${this.apiUrl}/products?id=${id}`;
    return this.httpClient.delete(url, {
      headers: this.auth.getAuthHeader(),
      observe: "response"
    }).pipe(
      map(resp => resp.status === 200)
    )
  }

  createProduct(product: any): Observable<boolean> {
    const url = `${this.apiUrl}/products`;
    return this.httpClient.post(url, product, {
      headers: this.auth.getAuthHeader(),
      observe: "response"
    }).pipe(
      map(resp => resp.status === 200)
    )
  }

  placeOrder(product: any): Observable<boolean> {
    const url = `${this.apiUrl}/products/order/${product.asin}`;
    return this.httpClient.post(url, null, {
      headers: this.auth.getAuthHeader(),
      observe: 'response',
    }).pipe(
      map(resp => resp.status === 200)
    );
  }

  getPreviosOrders(): Observable<any> {
    const url = `${this.apiUrl}/products/previous-orders`;
    return this.httpClient.get<any>(url, {
      headers: this.auth.getAuthHeader()
    });
  }
  
  getRecomendation(): Observable<any> {
    const url = `${this.apiUrl}/products/user-recommendations`;
    return this.httpClient.get<any>(url, {
      headers: this.auth.getAuthHeader()
    });
  }

  getCartRecomendation(cartItems: SimpleProduct[]): Observable<any> {
    const url = `${this.apiUrl}/products/cart-recommendations`;
    return this.httpClient.post<any>(url,cartItems, {
      headers: this.auth.getAuthHeader()
    });
  }

}
