import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { UserData } from '../auth.model';

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
  enteredPassword2Error = 'Make sure passwords match and they meet requirement for the first password!';

  constructor(public authService: AuthService) {}

  ngOnInit(): void {}

  onSignup(signupForm: NgForm) {
    if (signupForm.invalid) {
      return;
    }
    else if (!signupForm.value.password === signupForm.value.password2) {
      return;
    }
    else {
      var newUser: UserData = {
        username: signupForm.value.inUsername,
        email: signupForm.value.inEmail,
        password: signupForm.value.inPassword,
        role: signupForm.value.inRole,
      };

      this.authService.postSignup(newUser);
    }

  }
}
