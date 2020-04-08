import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  serverError: string;
  loginAccess: boolean = false;

  formLogin: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  login() {
    this.loginAccess = true;
    console.log(this.formLogin.value);
    this.authService.login(this.formLogin.value.email, this.formLogin.value.password)
    .then(res => {
      this.loginAccess = false;
      console.log(res);
      this.router.navigate(['./dashboard']);
    })
    .catch(er => {
      this.loginAccess = false;
      console.log(er);
      this.serverError = er.message;
    });
  }

}
