import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../user.service';
import { sessionUser } from '../test-data';
import { USER } from '../test-data';
import { Router } from  "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [UserService]
})

export class DashboardComponent implements OnInit {
  user = USER;
  // currentRoute: string = this.router.url;
  constructor(router: Router) { }

  ngOnInit() {
    // console.log(currentRoute);
    // this.user = this.userService.getUser();
  }
}
