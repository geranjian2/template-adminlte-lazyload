import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/service/service.index';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(
    public sidebarService: SidebarService,
  ) { }

  ngOnInit() {
    console.log('sidebar');
    
  }

}
