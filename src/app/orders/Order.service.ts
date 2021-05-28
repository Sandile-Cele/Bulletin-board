import {Order} from './Order.model';
import {Injectable} from '@angular/core';
import { Subject } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from "rxjs/operators";
import { Router } from '@angular/router';


@Injectable({providedIn: 'root'})
export class OrderService{
  orders: Order[] = [];
  protected message: string;
  private updatedOrders = new Subject<Order[]>();

  constructor (private http: HttpClient, private router: Router,) {}

  setOrders(inOrder: Order){
    const order: Order = inOrder;
    console.log("The input: Email:"+order.email+" username:"+ order.username+ " order description:"+order.orderDec+" id:" + order.id);
    this.http.post<{message: string, orderId: string}>('https://localhost:3000/api/orders', order)
      .subscribe((responseOrderData)=>{
        console.log("This is the message: " + responseOrderData.message);
        const id = responseOrderData.orderId;
        order.id = id;
        this.orders.push(order);
        this.updatedOrders.next([...this.orders]);
      });
  }

  getOrders(){
    this.http.get<{message: string, orders: any}>('https://localhost:3000/api/orders')
    .pipe(
      map((res: {message: string; orders: any;}) =>
      res.orders.map((data: any) => {
          return {
            id: data._id,
            username: data.username,
            email: data.email,
            orderDec: data.orderDec,

            messages: data.messages
          };
        })
      )
    )
    .subscribe((changedOrders)=>{
      this.message = changedOrders;
      this.orders = changedOrders;
      this.updatedOrders.next([...this.orders]);
    });
  }

  deleteOrder(orderId: String){
    this.http.delete('https://localhost:3000/api/orders/' + orderId)
    .subscribe(()=>{
      const updatedOrdersDel = this.orders.filter(order => order.id!== orderId);
      this.orders = updatedOrdersDel;
      this.updatedOrders.next([...this.orders]);
      console.log("Order deleted!");
    });

    this.router.navigate([""]);
  }

  getPostUpdateLister(){
    return this.updatedOrders.asObservable();
  }


}
