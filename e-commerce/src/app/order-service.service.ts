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

const LOCAL_KEY: string = "order_key"; 

@Injectable()
export class OrderServiceService {

  constructor() { 
    this.load();
  }
  private _orders: Array<Order>;

  //load data TO localStorage
  save() {
    //save data on localStorage
    localStorage[LOCAL_KEY] = JSON.stringify(this._orders);
  }

  //load data FROM localStorage
  //if no data, give it initial data
  load(): Array<Order> {
    let string_data = localStorage[LOCAL_KEY];
    let order_array;

    if (typeof string_data == "undefined") {
      order_array = ORDERS;
      //save the data to localStorage
      this._orders = this.loadData(order_array);
      this.save();
    }
    else {
      order_array = JSON.parse(string_data);
      this._orders = this.loadData(order_array);
    }

    return this._orders;
  }

  getAllOrder(): Array<Order> {
    return this._orders;
  }

  getOrder(id: string) {
    let all_order = this.getAllOrder();
    return this.getAllOrder().find((item: Order, index: number, all_order: Order[]) => {
      return item.id == id;
    });
  }

  loadData(orders_json_array: Array<any>) {
    let orders: Array<Order> = [];
    orders_json_array.forEach( (orderItem, index, arr) => {
      let items: Array<OrderItem> = [];
      orderItem.items.forEach( (item, item_index, item_arr) => {
        items.push(new OrderItem(item.item, item.quantity, item.unit_price));
      } );

      let order = new Order(items, new Date(orderItem.create_time));
      order.id = orderItem.id;      
      orders.push(order);
    });

    return orders;
  }
}
