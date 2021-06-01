import { Component, Input } from '@angular/core';
import { Order } from './orders/Order.model';
import { OrderService } from './orders/order.service';
import { AuthService } from './auth/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public authService: AuthService) {}


  signOut(){
    this.authService.removeToken();
    alert("You may be signed-out, go to \"list posts\" to check if you can still see posts.");
  }
}
