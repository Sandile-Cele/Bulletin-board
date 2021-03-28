import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-create',
  templateUrl: './order-create.component.html',
  styleUrls: ['./order-create.component.css'],
})
export class OrderCreateComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  newOrder = '';
  userName = '';
  printMsg = '';

  onAddOrder() {
    this.newOrder = 'Order Created';
    this.printMsg = 'Your username is ' + this.userName;
    // alert ('Order Created!');
  }

  clearText() {
    this.newOrder = null;
  }
}
