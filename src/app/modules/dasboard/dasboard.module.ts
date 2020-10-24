import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DasboardRoutingModule } from './dasboard-routing.module';
import { DasboardComponent } from './dashboard/dasboard.component';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [DasboardComponent],
  imports: [
    CommonModule,
    DasboardRoutingModule,
    NgSelectModule
  ]
})
export class DasboardModule { }
