import { Component, OnInit, Input } from '@angular/core';

import { OrderServiceService } from '.././order-service.service';
import { Order } from '.././order';

import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.css']
})
export class ReceiptComponent implements OnInit {

  order //allOrder from orderService
  constructor(private orderService: OrderServiceService, private currentRoute: ActivatedRoute) {
    //this.order = orderService.getAllOrder()[0];
  }

  ngOnInit() {
    //here params is observable and won't be readily available so forEach here waits until params becomes available
    //consequently, order.item on html template should be changed to order?.item since order can be undefined
    this.currentRoute.params.forEach( (params: Params) => {
      //gives the id of the order
      this.order = this.orderService.getOrder(params['id']);
    })
  }

}
