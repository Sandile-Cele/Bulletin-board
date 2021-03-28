import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-create',
  templateUrl: './order-create.component.html',
  styleUrls: ['./order-create.component.css']
})
export class OrderCreateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  newOrder = '';
  onAddOrder(){
  this.newOrder = 'Order Created';
    // alert ('Order Created!');
  }

  clearText(){
    this.newOrder = null;
  }

}
