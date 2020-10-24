import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';


const routes: Routes = [
  {
    path: '', component: LayoutComponent,
      children: [
        {
          path: '', 
          loadChildren: '../inmuebles/inmuebles.module#InmueblesModule'
        },
        {
          path: 'ciudades', 
          loadChildren: '../ciudades/ciudades.module#CiudadesModule'
        }
      ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
