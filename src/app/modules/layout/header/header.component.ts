import { Component, OnInit } from '@angular/core';
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
  ) { 
    this.user = this.authenticationService.currentUserValue;
  }

  ngOnInit() {
  }

}
