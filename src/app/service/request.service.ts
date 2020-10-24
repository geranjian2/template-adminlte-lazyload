import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class RequestService {
  headers: any = '';
  options: any = '';
  constructor(
    private http:HttpClient
  ) { }

  globalRequestApi(method, json, url) {
    let request: Observable<any>;
    const token = localStorage.getItem('token');

    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'auth': token
    });
    this.options = { headers: this.headers };
    if (method.toLowerCase() === 'get') {
      request = this.http.get(`${environment.url}/${url}`, this.options);
    } else {
      request = this.http.post(`${environment.url}/${url}`, json, this.options);
    }
    return request;
  }
}
