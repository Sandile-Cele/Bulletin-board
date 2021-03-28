import { Component, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-create',
  templateUrl: './order-create.component.html',
  styleUrls: ['./order-create.component.css'],
})
export class OrderCreateComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  inOrder = '';
  inUsername = '';
  inEmail = '';

  printMsg = '';

  readonly order = {
    userName: this.inUsername,
    email: this.inEmail,
    order: this.inOrder,
  };
  // order-placed.emit(order);

  onAddOrder() {
    this.printMsg = 'Order Created!' + ' Your username is ' + this.inUsername;
    // alert ('Order Created!');
  }

  clearText() {
    this.printMsg = null;
  }
}
