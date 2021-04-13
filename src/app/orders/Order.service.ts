import {Order} from './Order.model';
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})

export class OrderService{
  private order: Order [] = [];

  getOrders(){
    return [...this.order];
  }

  setOrders(inOrder: Order){
    this.order.push(inOrder);
  }

  
}
