import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { LayoutComponent } from './layout.component';


const routes: Routes = [
  {
    path: '', component: LayoutComponent,
      children: [
        {
          path: '', 
          loadChildren: '../inmuebles/inmuebles.module#InmueblesModule',
          canActivate: [AuthGuard],
        },
        {
          path: 'ciudades', 
          loadChildren: '../ciudades/ciudades.module#CiudadesModule',
          canActivate: [AuthGuard],
        },
        {
          path: 'sedes', 
          loadChildren: '../sedes/sedes.module#SedesModule',
          canActivate: [AuthGuard],
        }
      ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
