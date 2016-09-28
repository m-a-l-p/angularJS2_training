import { Component, OnInit } from '@angular/core';
import { OrderServiceService } from '.././order-service.service';
import { Order } from '.././order';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-receipt-selector',
  templateUrl: './receipt-selector.component.html',
  styleUrls: ['./receipt-selector.component.css']
})
export class ReceiptSelectorComponent implements OnInit {
  orders: Array<Order>;
  promiseOrders: Promise<Array<Order>>;
  observableOrders: Observable<Array<Order>>;
  
  //inject the service instance in constructor
  constructor(
    private orderService: OrderServiceService,
    private router: Router
  ) {
    this.orders = this.orderService.load();
    //using localStorage
    //this.orders = this.orderService.load();

    //using subscribe
    /*this.orderService.getOrderFromURL( orders => {
      this.orders = this.orderService.loadData(orders);
    });*/

    //using toPromise()
    /*this.promiseOrders = this.orderService.getOrderFromURL();
    this.promiseOrders.then ( resp => {
      console.log('>>>>> resp from promiseOrders');
      console.log(resp);
      this.orders = resp;
    });
    console.log('>>>>> data from URL:');
    console.log(this.promiseOrders);*/

    //using Observable
    //this.observableOrders = this.orderService.getOrderFromURL();
   }

   loadFromURL() {
     this.orderService.loadDataFromURL().then( orders => {
       this.orders = orders;
     });
   }

  ngOnInit() {
    /*this.observableOrders.subscribe( data => {
      this.orders = data;
    });*/
  }

  newOrder() {
    let newOrder: Order = new Order([], new Date());
    this.orders.push(newOrder);
    this.router.navigateByUrl('/edit/' +newOrder.id);
  }
}
