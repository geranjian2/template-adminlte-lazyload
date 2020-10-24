import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  headers:any = '';
  options: any = '';
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  constructor(
    private http: HttpClient,
  ) { }
  login(credentials) {
    console.log("ingreso",credentials);
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    this.options = { headers: this.headers };
    const loginParams = credentials;
    return this.http.post(
      `${environment.url}/auth/login`,
      loginParams,
      this.options
    );
  }
}
