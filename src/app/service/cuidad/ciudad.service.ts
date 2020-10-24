import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
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

    console.log('ciudad nombre : ', ciudad.name);



    return this.service.globalRequestApi('post', ciudad.name , 'city/save' );


    // return this.http.post(
    //   `${environment.url}/city/save`,
    //   loginParams,
    //   this.options
    // );
  }
}
