import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Ciudad } from 'src/app/models/ciudad';
import { CiudadService } from 'src/app/service/cuidad/ciudad.service';
import { SedeService } from 'src/app/service/sede/sede.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-save',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.scss']
})
export class SaveComponent implements OnInit {



  ciudades : Ciudad;
  myFormCampus: FormGroup;

  constructor(private fb: FormBuilder , private ciudadService: CiudadService , private sedeService: SedeService) { }

  ngOnInit() {

    this.myFormCampus = this.fb.group({
      city: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
    });

    this.listarCuidades();
  }


  saveCampus(){

    console.log(this.myFormCampus.value);

    if(this.myFormCampus.valid) {

      this.sedeService.listarGuardar(this.myFormCampus.value).subscribe( (res) => {

        if(res.message == "ok"){

          Swal.fire(
            'Guardo',
            'Guardo cuidad correctamente',
            'success'
          );
          this.myFormCampus.reset();
        }

      }, error => {
        Swal.fire(
          'Error',
          'Error al guardar sede',
          'error'
        );
      })
    }else{
      Swal.fire(
        'Error',
        'todos los campos son obligatarios',
        'info'
      );
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

}
