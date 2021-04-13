import {Order} from './Order.model';
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})

export class OrderService{
  private order: Order [] = [];

  getOrders(){
    const testing: Order = {userName: "Sandile", email:"sandfasfd@gmaldf.com", orderDec: "asdf asdf"}
    this.order.push(testing);
    return [...this.order];
  }

  setOrders(inOrder: Order){

    this.order.push(inOrder);
  }


}
