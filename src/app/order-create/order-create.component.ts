import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import {Order} from '../order';

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

  @Output()orderCreated = new EventEmitter<Order>();
  onAddOrder(OrderCreated: NgForm) {
    this.printMsg = 'Order Created!' + ' Your username is ' + this.inUsername;
    // alert ('Order Created!');
    const order = {
    userName: this.inUsername,
    email: this.inEmail,
    order: this.inOrder};

    // this.orderCreateComponent.emit(order);
  }

  clearText() {
    this.printMsg = null;
  }
}
