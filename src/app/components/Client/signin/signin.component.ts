import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  formSignin = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  },)
  constructor(private fb: FormBuilder, private AuthService: AuthService,private router: Router) {

  }
  onHandleSubmit() {
    if (this.formSignin.valid) {
      this.AuthService.signin(this.formSignin.value).subscribe(data => {
        localStorage.setItem('credential', JSON.stringify(data))
        this.router.navigate(['/admin']);
      })

    }
  }
}
