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
}
