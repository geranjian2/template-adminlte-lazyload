import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { SidebarService } from 'src/app/service/service.index';
declare function menu_init();

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  user:User;
  constructor(
    public sidebarService: SidebarService,
    private authenticationService: AuthenticationService,
  ) { 
    this.user = this.authenticationService.currentUserValue;
  }

  ngOnInit() {
    console.log('sidebar');
    menu_init();
  }

}
