import { Component, OnInit } from '@angular/core';
import { error } from 'console';
import { CiudadService } from 'src/app/service/cuidad/ciudad.service';
import Swal from 'sweetalert2';
import { Ciudad } from '../../../models/ciudad';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private ciudadService: CiudadService) { }


  ciudades : Ciudad;

  ngOnInit() {

    console.log('ayuda');

    this.listarCuidades();
  }

  listarCuidades() {


    this.ciudadService.listar().subscribe((res) => {

      console.log("res" + res);

      this.ciudades = res.data;

      console.log(  this.ciudades);

    },error=> {
      Swal.fire(
        'Error',
        'Listar ciudades con errores',
        'error'
      );
    } );
  }

}
