import { Component, OnInit, SecurityContext } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { UserData } from '../auth.model';
import {DomSanitizer} from "@angular/platform-browser"

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  enteredUserNameError = 'Please enter a username in the correct form!';
  enteredEmailError = 'Please enter a correctly formatted e-mail address!';
  enteredRoleError = 'Role entered must be >2 and <11';
  enteredPasswordError = 'Please enter a password that contains lower case, upper case letters and at least one number!';
  enteredPassword2Error = 'Make sure passwords match! And they meet requirement for the first password!';

  constructor(public authService: AuthService, protected sanitizer: DomSanitizer) {}

  ngOnInit(): void {}

  onSignup(signupForm: NgForm) {
    if (signupForm.invalid) {
      console.log("Some inputs are not valid");
      return;
    }
    else if (!signupForm.value.password === signupForm.value.password2) {
      console.log("passwords not the same");
      return;
    }
    else {

      var newUser: UserData = {
        username: this.sanitizer.sanitize(SecurityContext.HTML, signupForm.value.inUsername),
        email: this.sanitizer.sanitize(SecurityContext.HTML, signupForm.value.inEmail),
        password: this.sanitizer.sanitize(SecurityContext.HTML, signupForm.value.inPassword),
        role: this.sanitizer.sanitize(SecurityContext.HTML, signupForm.value.inRole),
      }

      this.authService.postSignup(newUser);
    }

  }
}
