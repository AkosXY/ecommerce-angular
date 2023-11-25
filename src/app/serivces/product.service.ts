import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient, private auth: AuthenticationService) { }

  getProducts(pageSize: number = 14, page: number = 1): Observable<any> {
    const url = `${this.apiUrl}/products?pageSize=${pageSize}&page=${page}`;
    return this.httpClient.get<any>(url, {
      headers: this.auth.getAuthHeader()
    }).pipe(

    );
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



}
