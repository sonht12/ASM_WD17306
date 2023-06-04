import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  email: string = '';
  password: string = '';
  

  constructor(private LoginService: LoginService) { }
  login(): void {
    this.LoginService.getUserByEmail(this.email)
      .subscribe((users: any) => {
        const user = users.find((u: any) => u.email === this.email && u.password === this.password);
        if (user) {
          console.log('Đăng nhập thành công');
        } else {
          console.log('Email hoặc mật khẩu không đúng');
        }
      });
  }
}
