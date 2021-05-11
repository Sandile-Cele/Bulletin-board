import {Order} from './Order.model';
import {Injectable} from '@angular/core';
import { Subject } from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class OrderService{
  protected orders: Order [] = [];
  protected message: string;
  private updatedOrders = new Subject<Order[]>();

  constructor (private http: HttpClient) {};


  setOrders(inOrder: Order){
    this.orders.push(inOrder);
      this.updatedOrders.next([...this.orders]);
  }

  getOrders(){
    // return [...this.orders];
    this.http.get<{message: string, orders: Order[]}>('https://localhost:3000/api/orders/')
    .subscribe((orderData)=>{
      this.orders = orderData.orders;
      this.message = orderData.message;
      this.updatedOrders.next([...this.orders]);
    });
  }

  getPostUpdateLister(){
    return this.updatedOrders.asObservable();
  }

}
