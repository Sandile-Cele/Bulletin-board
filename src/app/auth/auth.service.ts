import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { UserData } from "./auth.model";

@Injectable({ providedIn: "root" })
export class AuthService {
  private token: string;

  constructor(private http: HttpClient) { }

  postSignup(inUserData: UserData) {
    const userData: UserData = inUserData;
    console.log("The input: Email:" + userData.email + " username:" + userData.username + " order description:" + userData.password + " role:" + userData.role);

    this.http.post('https://localhost:3000/api/user/signup', userData)
      .subscribe((responseUserData) => {
        console.log(responseUserData);
      });
  }

  postLogin(inUserData: UserData) {
    const authData: UserData= inUserData;
//!!!!!!!!!!!!!!!!!!!!!!!! THIS IS ONLY SENDING PASSWORD AND EMAIL ONLY!!!!!!!!!!!!!!!!!
    this.http.post<{ token: string }>('https://localhost:3000/api/user/login', authData)
      .subscribe(response => {
        const token = response.token;
        this.token = token;
        console.log(response);
      });
  }

}
