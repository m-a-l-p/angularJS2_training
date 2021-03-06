/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OrderServiceService } from './order-service.service';
import { Order } from "./order"

describe('Service: Order', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrderServiceService]
    });
  });

  it('should ...', inject([OrderServiceService], (service: OrderServiceService) => {
    expect(service).toBeTruthy();
  }));

  it('should getAllOrder() return Array of all Order', inject([OrderServiceService], (service: OrderServiceService) => {
    //expect(service).toBeTruthy();
    let result = service.getAllOrder();
    expect(result).toBeTruthy();
    
    //expect(result.length).toBeGreaterThan(0)
  }));

  it(' getAllOrder() should have more than 2 order', inject([OrderServiceService], (service: OrderServiceService) => {
    let result = service.getAllOrder();
    expect(result.length).toBeGreaterThan(2)
  }));

   it('getOrder(id) should have same member in  getAllOrder()', inject([OrderServiceService], (service: OrderServiceService) => {
    let orders:Array<Order> = service.getAllOrder();
    for(let i = 0; i < orders.length; i++){
      let currect_order = orders[i]
      let sample_id = orders[i].id
      let sample_order = service.getOrder(sample_id)
      expect(sample_order.create_time.getTime()).toBe(currect_order.create_time.getTime())
      expect(sample_order.getTotal()).toBe(currect_order.getTotal())
    }
  }));

});
