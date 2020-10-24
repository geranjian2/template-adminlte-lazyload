import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  menu: Menu[] = [
    {
      titulo: 'Ciudades',
      icon: 'fa-th',
      url: '/ciudades',
      submenu: []
    },
    {
    titulo: 'Sedes',
    icon: 'fa-th',
    url: '/sedes',
    submenu: []
  }
  ];
  constructor() { }
}
export interface Menu {
  titulo: string;
  icon: string;
  url?: string;
  submenu: subMenu[];
}
// tslint:disable-next-line: class-name
export interface subMenu {
  titulo: string;
  icon: string;
  url: string;
}


