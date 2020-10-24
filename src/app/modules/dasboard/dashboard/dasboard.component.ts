import { Component, OnInit } from '@angular/core';
import { Ciudad } from 'src/app/models/ciudad';
import { CiuadaSede } from 'src/app/models/listarSede';
import { CiudadService } from 'src/app/service/cuidad/ciudad.service';
import { SedeService } from 'src/app/service/sede/sede.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dasboard',
  templateUrl: './dasboard.component.html',
  styles: []
})
export class DasboardComponent implements OnInit {


  ciudades: Ciudad;

  user = [];

  ciudadSedes: CiuadaSede;
  constructor( private ciudadService: CiudadService,
               private sedeService: SedeService) { }

  ngOnInit() {
    this.listarCuidades();
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
    });
   }

   buscarUser(sede) {


    this.sedeService.listarSedeUser(sede).subscribe ((res) => {



      console.log(res);

      this.user = res;



    }, error => {
      Swal.fire(
        'Error',
        'Listar usuarios con errores',
        'error'
      );
    } );

   }

}
