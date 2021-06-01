import { Component, OnInit, SecurityContext } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserData } from '../auth.model';
import { AuthService } from '../auth.service';
import {DomSanitizer} from "@angular/platform-browser"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  inEmailError = 'Please enter a correctly formatted e-mail address!';
  inPasswordError = 'Please enter a password that contains lower case, upper case letters and at least one number!';

  constructor(public authService: AuthService, protected sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  onLogin(signupForm: NgForm){

    if(signupForm.invalid){
      return;
    }

  var loginData: UserData = {
    username: null,
    email: this.sanitizer.sanitize(SecurityContext.HTML,  signupForm.value.inEmail),
    password: this.sanitizer.sanitize(SecurityContext.HTML,  signupForm.value.inPassword),
    role: null
  };

//!!!!!!!!!!!!!!!!!!!!!!!! THIS IS ONLY SENDING PASSWORD AND EMAIL ONLY!!!!!!!!!!!!!!!!!
    this.authService.postLogin(loginData);
    alert("If all details are correct, you may be logged-in. Go to list post to check");
  }

}
