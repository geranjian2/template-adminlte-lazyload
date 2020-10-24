import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Ciudad } from '../models/ciudad';
import { CiuadaSede } from '../models/listarSede';
import { CiudadService } from '../service/cuidad/ciudad.service';
import { SedeService } from '../service/sede/sede.service';
import {AuthenticationService} from '../service/authentication.service';
@Component({
  selector: 'app-registro-usuarios',
  templateUrl: './registro-usuarios.component.html',
  styleUrls: ['./registro-usuarios.component.scss']
})
export class RegistroUsuariosComponent implements OnInit {


  ciudades : Ciudad;

  ciudadSedes : CiuadaSede;

  myFormUser: FormGroup;
  constructor(private fb: FormBuilder , private ciudadService: CiudadService,
              private sedeService: SedeService , private a: AuthenticationService) { }

  ngOnInit() {

    this.myFormUser = this.fb.group({
      email: new FormControl('', [Validators.required]),
      cedula: new FormControl('', [Validators.required]),
      ciudad: new FormControl('', [Validators.required]),
      sedesave: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required]),
      apellido: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),


    });
    this.listarCuidades();
  }

  submitForm() {
    if (this.myFormUser.valid) {


      this.a.registerUser(this.myFormUser.value).subscribe( ( res) => {

        Swal.fire(
          'Guardo',
          'Guardo cuidad correctamente',
          'success'
        );
        this.myFormUser.reset();

      }, error => {
        Swal.fire(
          'Información',
          'El usuario ya existe',
          'info'
          )
      })
    }else{
      console.log('There is a problem with the form');
      Swal.fire(
        'Información',
        'Todos los campos son obligatorios',
        'info'
        )
    }
  }

  listarCuidades() {




    this.ciudadService.listar().subscribe((res) => {

      console.log("res" + res);

      this.ciudades = res;

      console.log(  this.ciudades);

    },error=> {
      Swal.fire(
        'Error',
        'Listar ciudades con errores',
        'error'
      );
    } );
  }

  peticion(data) {

   this.sedeService.listarSedeCiudad(data).subscribe( (res) => {



    console.log(res);
    this.ciudadSedes = res;

    this.ciudadSedes = this.ciudadSedes[0].sede;

   }, error => {
    Swal.fire(
      'Error',
      'Listar sedes con errores',
      'error'
    );
   })
  }

}
