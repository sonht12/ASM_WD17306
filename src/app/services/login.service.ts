import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url = 'http://localhost:3000/users'; // Đường dẫn đến file db.json

  constructor(private http: HttpClient) { }

  
  getUserByEmail(email: string) {
    return this.http.get(this.url);
  }
}
