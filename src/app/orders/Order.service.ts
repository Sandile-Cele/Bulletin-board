import {Order} from './Order.model';
import {Injectable} from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class OrderService{
  protected orders: Order [] = [];
  private updatedOrders = new Subject<Order[]>();

  setOrders(inOrder: Order){
    this.orders.push(inOrder);
      this.updatedOrders.next([...this.orders]);
  }

  getOrders(){
    return [...this.orders];
  }

  getPostUpdateLister(){
    return this.updatedOrders.asObservable();
  }

}
