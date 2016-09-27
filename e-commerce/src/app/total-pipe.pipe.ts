import { Pipe, PipeTransform } from '@angular/core';
import { OrderItem } from './order-item'

@Pipe({
  name: 'totalPipe'
})
export class TotalPipePipe implements PipeTransform {

  transform(items: Array<OrderItem>, args?: any): any {
    let sum = 0;
    if (items && items.length > 0) {
      items.forEach((orderItem: OrderItem, index: number, items: OrderItem[]) => {
        if (orderItem.quantity && orderItem.unit_price)
          sum += (orderItem.quantity * orderItem.unit_price);
      })
    }
    return sum;
  }
}
