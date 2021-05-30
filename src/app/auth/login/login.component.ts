import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserData } from '../auth.model';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  inEmailError = 'Please enter a correctly formatted e-mail address!';
  inPasswordError = 'Please enter a password that contains lower case, upper case letters and at least one number!';

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

  onLogin(signupForm: NgForm){

    if(signupForm.invalid){
      return;
    }


    var loginData: UserData = {
      username: null,
      email: signupForm.value.inEmail,
      password: signupForm.value.inPassword,
      role: null
    };
    console.log("straight from from: Email:" + loginData.email + " password:" + loginData.password );

//!!!!!!!!!!!!!!!!!!!!!!!! THIS IS ONLY SENDING PASSWORD AND EMAIL ONLY!!!!!!!!!!!!!!!!!
    this.authService.postLogin(loginData);
  }

}
