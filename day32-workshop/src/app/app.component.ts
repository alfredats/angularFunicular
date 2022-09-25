import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { PurchaseOrderComponent } from './components/purchase-order.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  
  @ViewChild(PurchaseOrderComponent)
  purchaseOrderCMP! : PurchaseOrderComponent 


  title = 'day32-workshop';

  toUpdate?: string;

  forwardOrderID(orderID: string) {
    this.toUpdate=orderID;
  }

  ngAfterViewInit(): void {
    console.log(">>> uuid: ", this.purchaseOrderCMP.form.get('uuid'));
  }
}
