import { Component, OnInit } from '@angular/core';
import { OrderServiceService } from '.././order-service.service';
import { Order } from '.././order';

@Component({
  selector: 'app-receipt-selector',
  templateUrl: './receipt-selector.component.html',
  styleUrls: ['./receipt-selector.component.css']
})
export class ReceiptSelectorComponent implements OnInit {
  orders: Array<Order>;
  
  //inject the service instance in constructor
  constructor(orderService: OrderServiceService) {
    this.orders = orderService.getAllOrder();
   }

  ngOnInit() {
  }

}
