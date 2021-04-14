import {Order} from './Order.model';
import {Injectable} from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class OrderService{
  private orders: Order [] = [];
  private updatedOrders = new Subject<Order>();

  setOrders(inOrder: Order){
    this.orders.push(inOrder);
  }

  getOrders(){
    const testing: Order = {userName: "Sandile1", email:"sandfasfd@gmaldf.com", orderDec: "asdf asdf"}
    this.orders.push(testing);
    return [this.orders];
  }

  getPostUpdateLister(){
    return this.updatedOrders.asObservable();
  }

}
