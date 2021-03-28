import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-placed',
  templateUrl: './order-placed.component.html',
  styleUrls: ['./order-placed.component.css'],
})
export class OrderPlacedComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  expansionData = [
    { userName: 'First Order', order: 'this is what order1 needs' },
    { userName: 'Second Order', order: 'this is order number two' },
    { userName: 'Third Order', order: 'this is order number 3' },
  ];

}
