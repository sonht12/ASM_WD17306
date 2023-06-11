import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from '../interface/user';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  API_URL: string = 'http://localhost:8088/api';

  constructor(private http: HttpClient) { }

  signup(user: any): Observable<any> {
    return this.http.post(`${this.API_URL}/signup`, user);
  }
  signin(user: any): Observable<any> {
    return this.http.post(`${this.API_URL}/signin`, user);
  }
  isAuthenticated(): any {
    return JSON.parse(localStorage.getItem('credential')!) || {};
  }
  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.API_URL}/user`);
  }
  getUser(id:any): Observable<IUser> {
    return this.http.get<IUser>(`${this.API_URL}/user/` + id);
  }
  deleteUser(id: number | string): Observable<IUser> {
    return this.http.delete<IUser>(`${this.API_URL}/user/` + id);
  }
}
