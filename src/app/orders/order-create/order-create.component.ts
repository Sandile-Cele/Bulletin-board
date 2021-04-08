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

  constructor() {}

  ngOnInit(): void {}

  @Output() orderCreated: EventEmitter<Order> = new EventEmitter();
  onAddOrder() {
    const oneOrder: Order = {
    userName: this.inUsername,
    email: this.inEmail,
    placeOrder: this.inOrder};


    this.orderCreated.emit(oneOrder);
  };



}
