import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  enteredUserNameError = 'Please enter a username in the correct form!';
  enteredEmailError = 'Please enter a correctly formatted e-mail address!';
  enteredPasswordError = 'Please enter a password that contains lower case, upper case letters and at least one number!';
  enteredPasswordError2 = 'Make sure passwords match and they meet requirement for the first password!';

  constructor() { }

  ngOnInit(): void {
  }

}
