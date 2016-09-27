import { Component } from '@angular/core';

import { Order } from './order';
import { OrderItem } from './order-item';

import { OrderServiceService } from './order-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  //orders: Array<Order>;
  order: Order;
  
  constructor(orderService: OrderServiceService) {
    this.order = orderService.getAllOrder()[0];
  }
}
