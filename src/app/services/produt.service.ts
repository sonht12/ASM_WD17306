import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { IProduct } from '../interface/product';
@Injectable({
  providedIn: 'root'
})
export class ProdutService {

  API_URL: string = 'http://localhost:8088/api';
  constructor(private http: HttpClient) { }
  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.API_URL}/product`);
  }
  getProduct(id:any): Observable<IProduct> {
    return this.http.get<IProduct>(`${this.API_URL}/product/` + id);
  }
  addProduct(product: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>(`${this.API_URL}/product`, product);
  }
  updateProduct(product: IProduct): Observable<IProduct> {
    return this.http.put<IProduct>(`${this.API_URL}/product/${product._id}/`, product);
}
deleteProduct(id: number | string): Observable<IProduct> {
  return this.http.delete<IProduct>(`${this.API_URL}/product/` + id);
}
}
