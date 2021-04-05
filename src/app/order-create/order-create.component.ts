import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import {Order} from '../Order.model';

@Component({
  selector: 'app-order-create',
  templateUrl: './order-create.component.html',
  styleUrls: ['./order-create.component.css'],
})
export class OrderCreateComponent implements OnInit {
  inUsername = '';
  inEmail = '';
  inOrder = '';

  printMsg = '';

  constructor() {}

  ngOnInit(): void {}

  @Output() orderCreated: EventEmitter<any> = new EventEmitter();

  onAddOrder() {
    this.printMsg = 'Order Created!';

    const order = {
    userName: this.inUsername,
    email: this.inEmail,
    order: this.inOrder};

    this.orderCreated.emit(order)
  };

  clearText() {
    this.printMsg = null;
  }

}
