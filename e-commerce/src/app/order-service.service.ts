import { Injectable } from '@angular/core';

import { Order } from './order';
import { OrderItem } from './order-item';

const ORDERS = [
        new Order([
          new OrderItem('Samsung Note7',1,2490),
          new OrderItem('MacBook',1,4900),
          new OrderItem('Ipad Mini',2,1450)
        ], new Date("2015-12-04")),
        new Order([
          new OrderItem('Order2-1',1,2530),
          new OrderItem('Order2-2',1,4370),
          new OrderItem('Order2-3',2,450)
        ], new Date("2015-12-25")),
        new Order([
          new OrderItem('Order3-1',1,2580),
          new OrderItem('Order3-2',1,899),
          new OrderItem('Order3-3',2,1538)
        ], new Date("2016-01-10"))
    ];

@Injectable()
export class OrderServiceService {

  constructor() { }

  getAllOrder(): Array<Order> {
    
    return ORDERS;
  }

  getOrder(id: string) {
    let all_order = this.getAllOrder();
    return this.getAllOrder().find((item: Order, index: number, all_order: Order[]) => {
      return item.id == id;
    });
  }
}
