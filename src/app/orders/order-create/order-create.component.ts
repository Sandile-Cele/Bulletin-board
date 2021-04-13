import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Order} from '../Order.model';

@Component({
  selector: 'app-order-create',
  templateUrl: './order-create.component.html',
  styleUrls: ['./order-create.component.css'],
})
export class OrderCreateComponent implements OnInit {
  inUsernameError = 'Username must be > 4 and < 12';
  inEmailError = 'Make sure email is in the correct format';
  inOrderError = 'Order must be <50 characters';

  constructor() {}

  ngOnInit(): void {}

  @Output() orderCreated: EventEmitter<Order> = new EventEmitter();
  onAddOrder(Orderform: NgForm) {

    if(Orderform.invalid){
      return;
    }

    const oneOrder: Order = {
    userName: Orderform.value.inUsername,
    email: Orderform.value.inEmail,
    placeOrder: Orderform.value.inOrder};

    this.orderCreated.emit(oneOrder);
  };



}
