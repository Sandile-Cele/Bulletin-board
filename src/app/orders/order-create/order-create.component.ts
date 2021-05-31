import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Order} from '../Order.model';
import { OrderService } from '../order.service';
import { DomSanitizer } from "@angular/platform-browser";


@Component({
  selector: 'app-order-create',
  templateUrl: './order-create.component.html',
  styleUrls: ['./order-create.component.css'],
})
export class OrderCreateComponent implements OnInit {

  inUsernameError = 'Post must be > 4 letters, lower case, upper case and numbers only!';
  inEmailError = 'Make sure email is in the correct format!';
  inOrderError = 'Post description must be >3 and <50 characters!';

  constructor(public orderService: OrderService, protected sanitizer: DomSanitizer) {}

  ngOnInit(): void {}

  onAddOrder(Orderform: NgForm) {

    if(Orderform.invalid){
      return;
      }

    var oneOrder: Order = {id:null, username: Orderform.value.inUsername, email: Orderform.value.inEmail, orderDec: Orderform.value.inOrder};

      this.orderService.postOrders(oneOrder);
  }

}
