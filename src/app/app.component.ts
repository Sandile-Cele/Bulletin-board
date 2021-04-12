import { Component, Input } from '@angular/core';
import { Order } from './orders/Order.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'miniLearningNg';

  storedOrders:Order[] = [];

  onOrderCreated(order){
    this.storedOrders.push(order);
  }
}
