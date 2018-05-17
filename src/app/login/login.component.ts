import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})

export class LoginComponent {
  usernameValid: boolean = null;
  sessionUserId: string = null;

  constructor(private router: Router, private userService: UserService) { }

  submitLogin(username, password) {
    this.validateInput(username);
    if (this.usernameValid) {
      this.sendUserAuthRequest(username, password);
      this.getUserProfile(username, this.sessionUserId);
    } else {
      alert('Login Failed.');
    }
  }

  validateInput(username: string) {
    this.usernameValid = null;
    if (!username.includes(' ') && username !== '') {
      this.usernameValid = true;
    } else {
      this.usernameValid = false;
    }
  }

  sendUserAuthRequest(username: string, password: string) {
    this.userService.loginUser(username, password).subscribe((response:any) => {
      return response.id.toString();
    });
  }

  getUserProfile(username: string, user_id:string) {
    console.log(user_id);
    this.userService.getUser(user_id).subscribe((res: Response) => {
      console.log(res);
    });
    this.router.navigate(['dashboard', username]);
  }
}
