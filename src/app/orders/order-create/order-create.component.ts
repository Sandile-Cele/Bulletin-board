import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Order} from '../Order.model';

@Component({
  selector: 'app-order-create',
  templateUrl: './order-create.component.html',
  styleUrls: ['./order-create.component.css'],
})
export class OrderCreateComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {}

  @Output() orderCreated: EventEmitter<Order> = new EventEmitter();
  onAddOrder(Orderform: NgForm) {
    const oneOrder: Order = {
    userName: Orderform.value.inUsername,
    email: Orderform.value.inEmail,
    placeOrder: Orderform.value.inOrder};


    this.orderCreated.emit(oneOrder);
  };



}
