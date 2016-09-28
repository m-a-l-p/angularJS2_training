import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { OrderServiceService } from '.././order-service.service';
import { Order } from '.././order';
import { OrderItem } from '.././order-item';

@Component({
  selector: 'app-receipt-editor',
  templateUrl: './receipt-editor.component.html',
  styleUrls: ['./receipt-editor.component.css']
})
export class ReceiptEditorComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute, 
    private orderService: OrderServiceService,
    private router: Router
  ) { }

  private order: Order;
  private formDate: string;

  ngOnInit() {
    console.log('..... START receipt-editor - ngOnInit .....');
    this.activatedRoute.params.forEach( (params: Params) => {
      this.order = this.orderService.getOrder(params['id']);
      this.formDate = this.order.create_time.toISOString().substring(0,10);
      console.log(this.order);
      console.log(this.formDate);
    });

    if (this.order.items.length <= 0)
      this.addItem();
  }

  //add item to the order
  addItem() {
    this.order.items.push( new OrderItem('', 1, 0) );

  }

  //delete item from the order
  deleteItem(index: number) {
    this.order.items.splice(index, 1);
  }

  //validate the form to ensure data are correct and ready
  //validate 1) date is not empty; 2) should have at least 1 item
  //3) each item should have a name
  validate(): boolean {
    let result = true;

    if (this.formDate == '')
      return false;
    if (this.order.items.length <= 0)
      return false;
    if (this.order.items.length > 0) {
      this.order.items.forEach( item => {
        if (item.item =='')
          result = false;
      });
    }
    
    return result;
  }

  //save data to the DB
  save() {
    if(!this.validate())
      return false;
    
    //we need to change the formDate back to create_time
    this.order.create_time = new Date(this.formDate);

    //we need to save the order to DB (localStorage)
    this.orderService.updateOrder(this.order);

    return true;
  }

  //delete data to the DB
  delete() {
    //we need to save the order to DB (localStorage)
    this.orderService.deleteOrder(this.order.id);

    return true;
  }

  onSave() {
    if(!this.save())
      alert('An error was encountered while saving the order. Please check your order details.');
    else
      alert('The order has been successfuly saved!!!');
  }

  onDelete() {
    if(!this.delete())
      alert('An error was encountered while deleting the order...');
    else
      alert('The order has been successfuly deleted!!!');

    this.router.navigateByUrl('');
  }
}
