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
  orders:Order[] = [];//@Input()
  private orderSubscription: Subscription;

  constructor(public orderService: OrderService) {}

  ngOnInit(){
    this.orders = this.orderService.getOrders();
    // this.orderSubscription = this.orderService.getPostUpdateLister()
    //   .subscribe((orders: Order[]) =>
    //   {
    //      this.orders = orders
    //   });

  }

  ngOnDestroy(){

  }




}

