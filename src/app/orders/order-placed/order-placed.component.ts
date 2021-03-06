import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Order } from '../Order.model';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-placed',
  templateUrl: './order-placed.component.html',
  styleUrls: ['./order-placed.component.css'],
})

export class OrderPlacedComponent implements OnInit, OnDestroy {
  orders:Order[] = [];

  constructor(public orderService: OrderService) {}
  ordersSubscription: Subscription;

  ngOnInit(){
    // this.orders = this.orderService.getOrders();
    this.orderService.getOrders();

    this.ordersSubscription = this.orderService.getPostUpdateLister()
      .subscribe((orders: Order[]) =>
      {
         this.orders = orders;
      });

  }

  ngOnDestroy(){
    this.ordersSubscription.unsubscribe();
  }

  onDelete(id: String){
    this.orderService.deleteOrder(id);
  }

  onEdit(id: String){
    // this.orderService.editOrder(id);
    alert("Feature coming soon!");
  }

}

