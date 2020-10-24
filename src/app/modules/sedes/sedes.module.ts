import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SedesRoutingModule } from './sedes-routing.module';
import { SaveComponent } from './save/save.component';
import { ListComponent } from './list/list.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule , ReactiveFormsModule  } from '@angular/forms';
@NgModule({
  declarations: [SaveComponent, ListComponent],
  imports: [
    CommonModule,
    SedesRoutingModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SedesModule { }
