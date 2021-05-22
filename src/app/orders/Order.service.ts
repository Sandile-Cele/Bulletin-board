import {Order} from './Order.model';
import {Injectable} from '@angular/core';
import { Subject } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from "rxjs/operators";

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

  //This works!!!, without mapping
  // getOrders(){
  //   this.http.get<{message: string, orders: any}>('https://localhost:3000/api/orders')
  //   .subscribe((orderData)=>{
  //     this.orders = orderData.orders;
  //     this.message = orderData.message;
  //     this.updatedOrders.next([...this.orders]);
  //   });
  // }

  //With mapping
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
      console.log("message:"+ this.message)
      this.orders = changedOrders;
      console.log("Here are the order from map:"+ this.orders)
      this.updatedOrders.next([...this.orders]);
    });
  }


  deleteOrder(orderId: string){
    this.http.delete('https://localhost:3000/api/orders' + orderId)
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
