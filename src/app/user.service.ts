import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Http } from '@angular/http';
import { User } from './models/user.model';

const httpOptions = {
  headers: new HttpHeaders({"Content-Type": 'application/json' })

}

@Injectable()
export class UserService {
  private endpoint = 'https://tools-libarary.herokuapp.com/api/';

  constructor(private http: HttpClient) { }

  getUser(user_id:string) {
    let apiLoginEndpoint = `${this.endpoint}userProfiles/${user_id}/detail/`;
    return this.http.get(apiLoginEndpoint, httpOptions);
  }

  loginUser(username: string, password: string) {
    let user = {username: username, password: password};
    let apiLoginEndpoint = `${this.endpoint}auth/login/`;
    return this.http.post(apiLoginEndpoint, user, httpOptions);
  }

  createNewUser(username: string, email: string, password: string, password2: string) {
    let user = {username: username, email: email, password: password, password2: password2}
    let apiRegisterEndpoint = `${this.endpoint}auth/register/`;
    return this.http.post(apiRegisterEndpoint, user, httpOptions);
  }

}
