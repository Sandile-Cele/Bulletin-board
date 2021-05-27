import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Order} from '../Order.model';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-create',
  templateUrl: './order-create.component.html',
  styleUrls: ['./order-create.component.css'],
})
export class OrderCreateComponent implements OnInit {

  inUsernameError = 'Username must be > 4 and < 12, lower case, upper case and numbers only';//Error messages
  inEmailError = 'Make sure email is in the correct format!';
  inOrderError = 'Post must be >3 and <50 characters!';

  constructor(public orderService: OrderService) {

  }

  ngOnInit(): void {}

  onAddOrder(Orderform: NgForm) {

    if(Orderform.invalid){
      return;
    }

    var oneOrder: Order = {id:null, username: Orderform.value.inUsername,
      email: Orderform.value.inEmail,
      orderDec: Orderform.value.inOrder};

    this.orderService.setOrders(oneOrder)
  }

}

  //Not in use anymore, using service now
  // @Output() orderCreated: EventEmitter<Order> = new EventEmitter();

  // const oneOrder: Order = {
  //   userName: Orderform.value.inUsername,
  //   email: Orderform.value.inEmail,
  //   placeOrder: Orderform.value.inOrder};

  //   //this.orderCreated.emit(oneOrder);

  //   this.orderService.setOrders(oneOrder);
  // };
