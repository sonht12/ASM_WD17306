import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  constructor(private AuthService: AuthService) { }

  onSubmit() {
    const userData = {
      name: this.name,
      email: this.email,
      password: this.password
    };

    this.AuthService.registerUser(userData)
      .subscribe(
        response => {
          console.log('Đăng ký thành công!', response);
        },
        error => {
          console.error('Lỗi đăng ký:', error);
        }
      );
  }
  compareWith(control: any): { [key: string]: boolean } | null {
    return control.value === this.password ? null : { compareWith: true };
  }
}
