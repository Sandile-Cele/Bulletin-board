import {Order} from './Order.model';
import {Injectable} from '@angular/core';
import { Subject } from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class OrderService{
  orders: Order[] = [];
  protected message: string;
  private updatedOrders = new Subject<Order[]>();

  constructor (private http: HttpClient) {};


  setOrders(inOrder: Order){//The lab accepts each var here, by I take in the whole order
    // this.orders.push(inOrder);
    // this.updatedOrders.next([...this.orders]);
    const order: Order = inOrder;//The guide sets each var here
    console.log(order.username);
    this.http.post<{message: string}>('https://localhost:3000/api/orders', order)
      .subscribe((responseOrderData)=>{
        // console.log(responseOrderData.message);
        // order.id = 'asdf';
        this.orders.push(order);
        this.updatedOrders.next([...this.orders]);
      });

  }

  getOrders(){
    // return [...this.orders];
    this.http.get<{message: string, orders: any}>('https://localhost:3000/api/orders')
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
