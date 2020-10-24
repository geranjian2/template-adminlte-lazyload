import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  myFormLogin: FormGroup;
  constructor(
    private auth:AuthenticationService,
    private fb: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit() {
    this.myFormLogin = this.fb.group({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  submitForm() {
    if (this.myFormLogin.valid) {
        console.log(this.myFormLogin.getRawValue());
        this.auth.login(this.myFormLogin.getRawValue()).subscribe((data:any)=>{
          localStorage.setItem('token', data.token);
          localStorage.setItem('currentUser', JSON.stringify(data.user));
          const user: User = data.user;
          console.log(user);
          this.auth.setCurrentUserValue(user);
          this.router.navigate(['/']);
        },error=>{
          console.log("error de petición")
        });
    } else {
        console.log('There is a problem with the form');
    }
  }

}
