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
  enteredEmailError = 'Please enter a correctly formatted e-mail address!';
  enteredPasswordError = 'Please enter a password that contains lower case, upper case letters and at least one number!';

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

  onSignup(signupForm: NgForm){

    if(signupForm.invalid){
      return;
    }

    var login: UserData = {
      username: null,
      email: signupForm.value.email,
      password: signupForm.value.password,
      role: null
    };
//!!!!!!!!!!!!!!!!!!!!!!!! THIS IS ONLY SENDING PASSWORD AND EMAIL ONLY!!!!!!!!!!!!!!!!!
    this.authService.postLogin(login);
  }

}
