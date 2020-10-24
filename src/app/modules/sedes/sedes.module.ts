import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SedesRoutingModule } from './sedes-routing.module';
import { SaveComponent } from './save/save.component';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [SaveComponent, ListComponent],
  imports: [
    CommonModule,
    SedesRoutingModule
  ]
})
export class SedesModule { }
