import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) { }
  registerUser(userData: any) {
    return this.http.post(`${this.apiUrl}/users`, userData);
  }
}
