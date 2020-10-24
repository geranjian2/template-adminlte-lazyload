import { Component, OnInit } from '@angular/core';

import { Sede } from 'src/app/models/sede';
import { SedeService } from 'src/app/service/sede/sede.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {


  sedes : Sede;
  constructor(private sedeService: SedeService) { }

  ngOnInit() {

    this.listarSedes();
  }

  listarSedes() {


    this.sedeService.listarSedes().subscribe( ( resp) => {


      this.sedes = resp;

    },error=> {
      Swal.fire(
        'Error',
        'Listar sedes con errores',
        'error'
      );
    });

  }

}
