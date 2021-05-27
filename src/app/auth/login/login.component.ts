import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  enteredEmailError = 'Please enter a correctly formatted e-mail address!';
  enteredPasswordError = 'Please enter a password that contains lower case, upper case letters and at least one number!';

  constructor() { }

  ngOnInit(): void {
  }

}
