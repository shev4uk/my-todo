import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  formReg: FormGroup;
  serverError: string;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.formReg = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }
  
  registration() {
    console.log(this.formReg.value);
    this.authService.register(this.formReg.value.email, this.formReg.value.password)
    .then(res => {
      console.log(res);
      this.router.navigate(['./dashboard']);
    })
    .catch(er => {
      console.log(er);
      this.serverError = er.message;
    });
  }

}
