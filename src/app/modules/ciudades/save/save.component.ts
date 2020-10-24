import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CiudadService } from 'src/app/service/cuidad/ciudad.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-save',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.scss']
})
export class SaveComponent implements OnInit {


  myFormCity: FormGroup;
  constructor(private fb: FormBuilder, private ciudad: CiudadService) { }

  ngOnInit() {

    this.myFormCity = this.fb.group({
      name: new FormControl('', [Validators.required]),

    });
  }

  submitForm() {

    console.log(this.myFormCity.getRawValue());


    this.ciudad.saveCiudad(this.myFormCity.getRawValue()).subscribe((res) => {

      console.log("respuesta " + res);

    }, error => {
      Swal.fire(

        'Error',

        'Error al crear un ciudad',

        'error'

      )
    }
    );


  }

}
