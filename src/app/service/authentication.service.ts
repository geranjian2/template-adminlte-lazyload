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
  ) {

    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem('currentUser'))
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }


  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }


  public setCurrentUserValue(user: User) {
    console.log(user);
    this.currentUserSubject.next(user);
  }

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


  registerUser(data) {

    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    this.options = { headers: this.headers };
    const loginParams =  {
      username : data.username,
      password : data.password,
      cedula : data.cedula,
      sedesave : data.sedesave,
      apellido : data.apellido,
      email: data.email
    }
    return this.http.post(
      `${environment.url}/users`,
      loginParams,
      this.options
    );
  }
  logout() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
    this.currentUserSubject.next(null);
  }
}
