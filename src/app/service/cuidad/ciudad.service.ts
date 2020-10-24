import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RequestService } from '../request.service';
@Injectable({
  providedIn: 'root'
})
export class CiudadService {

  headers:any = '';
  options: any = '';

  constructor(  private http: HttpClient , private service:RequestService) { }



  saveCiudad(ciudad) {


    let request: Observable<any>;
    console.log('ciudad nombre : ', ciudad.name);


    const datosEnviar = {
      name : ciudad.name
    };
    request = this.service.globalRequestApi('post', datosEnviar , 'city' );

    return request ;
  }



  listar() {


    let request: Observable<any>;

    request = this.service.globalRequestApi('get', null , 'city' );



      console.log(request);


    return request ;
  }
}
