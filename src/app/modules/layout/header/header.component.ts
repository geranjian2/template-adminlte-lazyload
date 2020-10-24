import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user: User;
  constructor(
    private authenticationService: AuthenticationService,
    private router : Router
  ) { 
    this.user = this.authenticationService.currentUserValue;
  }

  ngOnInit() {
  }
  logaut(){
    this.authenticationService.logout();
    // this.router.navigate(['/login']);
  }

}
