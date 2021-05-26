import {Order} from './Order.model';
import {Injectable} from '@angular/core';
import { Subject } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from "rxjs/operators";

@Injectable({providedIn: 'root'})
export class OrderService{
  orders: Order[] = [];
  protected message: string;
  private updatedOrders = new Subject<Order[]>();

  constructor (private http: HttpClient) {}

  setOrders(inOrder: Order)
  {
    const order: Order = inOrder;
    console.log("Id:"+order.id+"| Username: " +order.username+ "| email:"+ order.email+"| Order:"+ order.orderDec);
    this.http.post<{message: String, orderId: string}>('https://localhost:3000/api', order)
    .subscribe((responseOrderData)=>{
      console.log(responseOrderData.message);
      const id = responseOrderData.orderId;
      order.id = id;
      this.orders.push(order);
      this.updatedOrders.next([...this.orders]);
    });
  }

  //MY CODE
  // setOrders(inOrder: Order){//The lab accepts each var here, by I take in the whole order
  //   //this.orders.push(inOrder);
  //   // this.updatedOrders.next([...this.orders]);
  //   const order: Order = inOrder;//The guide sets each var here
  //   console.log("The input: Email:"+order.email+" username:"+ order.username+ " order description:"+order.orderDec+" id:" + order.id);

  //   this.http.post<{message: string, orderId: string}>('https://localhost:3000/api/orders', order)
  //     .subscribe((responseOrderData)=>{
  //       console.log("This is the message: " + responseOrderData.message);
  //       const id = responseOrderData.orderId;
  //       order.id = id;
  //       this.orders.push(order);
  //       this.updatedOrders.next([...this.orders]);
  //     });
  // }

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
  }

  getPostUpdateLister(){
    return this.updatedOrders.asObservable();
  }


}
