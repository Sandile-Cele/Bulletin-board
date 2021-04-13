import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Order } from '../Order.model';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-placed',
  templateUrl: './order-placed.component.html',
  styleUrls: ['./order-placed.component.css'],
})

export class OrderPlacedComponent implements OnInit, OnDestroy {
  orders:Order[] = [];//@Input()

  constructor(public orderService: OrderService) {}

  ngOnInit(){
    this.orders = this.orderService.getOrders();
  }
  ngOnDestroy(){

  }




}

