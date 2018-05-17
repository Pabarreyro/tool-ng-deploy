import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../user.service';
import { sessionUser } from '../test-data';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [UserService]
})

export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }
}
