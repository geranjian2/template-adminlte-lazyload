import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CiudadesRoutingModule } from './ciudades-routing.module';
import { SaveComponent } from './save/save.component';
import { ListComponent } from './list/list.component';
import { FormsModule , ReactiveFormsModule  } from '@angular/forms';

@NgModule({
  declarations: [SaveComponent, ListComponent],
  imports: [
    CommonModule,
    CiudadesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CiudadesModule { }
