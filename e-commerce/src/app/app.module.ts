import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TotalPipePipe } from './total-pipe.pipe';
import { TaxPipePipe } from './tax-pipe.pipe';

import { OrderServiceService } from './order-service.service';
import { ReceiptComponent } from './receipt/receipt.component';
import { ReceiptSelectorComponent } from './receipt-selector/receipt-selector.component';
import { routing } from './app.routing';
import { AboutComponent } from './about/about.component';
import { ReceiptEditorComponent } from './receipt-editor/receipt-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    TotalPipePipe,
    TaxPipePipe,
    ReceiptComponent,
    ReceiptSelectorComponent,
    AboutComponent,
    ReceiptEditorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing//use routing in imports
  ],
  providers: [
    OrderServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
