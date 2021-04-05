import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-order-placed',
  templateUrl: './order-placed.component.html',
  styleUrls: ['./order-placed.component.css'],
})
export class OrderPlacedComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() orders = [];


}
