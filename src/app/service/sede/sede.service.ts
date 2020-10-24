import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestService } from '../request.service';

@Injectable({
  providedIn: 'root'
})
export class SedeService {
  headers:any = '';
  options: any = '';

  constructor(  private http: HttpClient , private service:RequestService) { }

  listarSedes() {

    let request: Observable<any>;

    request = this.service.globalRequestApi('get' , null , 'campus');


    return request;

  }

  listarGuardar(rdata) {

    let request: Observable<any>;


    const data = {
      name : rdata.name,
      ciudad : rdata.city
    };
    request = this.service.globalRequestApi('post' , data , 'campus');


    return request;

  }


  listarSedeCiudad(dato) {

    let request: Observable<any>;


    request = this.service.globalRequestApi('get' , null , `campus/city/${dato}`);


    return request;

  }

  listarSedeUser (dato) {
    let request: Observable<any>;
    request = this.service.globalRequestApi('get' , null , `users/getuser/userall/${dato}`);
    return request;

  }



}
