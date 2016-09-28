import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { Operator, Observable } from 'rxjs';
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

const URL: string = 'data/orders.json'; //path of files (backend)

@Injectable()
export class OrderServiceService {

  constructor(private _http: Http) { 
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

  //using subscribe and toPromise
  // getOrderFromURL(/*callback: Function*/): Promise<Array<Order>> { //Promise<Array<Order>>
  //   return this._http.get(URL)
  //               .toPromise()
  //               .then( resp => this.loadData( resp.json() ))
  //               .catch( reason => [] );
  //   /*this._http.get(URL).subscribe( data => {
  //     console.log(data);
  //     console.log(data.json());
  //     callback(this.loadData(data.json())); //to return Array<Order>
  //   });*/
  // }

  //using Observable
  // getOrderFromURL(): Observable<Array<Order>> {
  //   return this._http.get(URL).map( resp => {
  //     this._orders = this.loadData(resp.json());
  //     return this._orders;
  //   });
  // }

  loadDataFromURL(): Promise<Array<Order>> {
    return this._http.get(URL).toPromise().then( resp => {
      this._orders = this.loadData( resp.json() );
      this.save();
      return this._orders;
    });
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

  //update the order and save to DB
  updateOrder(order: Order) {
    //find index of the corresponding order in _orders
    let index = this._orders.findIndex ( item => {
      return item.id == order.id;
    });
    //replace _orders[index] with order
    this._orders[index] = order;
    
    //save()
    this.save();
  }

  //delete the order with the given id from the DB
  deleteOrder(id: string) {
    let index = this._orders.findIndex ( item => {
      return item.id == id;
    });
    //replace _orders[index] with order
    this._orders.splice(index, 1);
    
    //save()
    this.save();
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
