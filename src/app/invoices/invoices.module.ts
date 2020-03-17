import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { InvoicesRoutingModule } from "./invoices-routing.module";
import { SharedModule } from "../shared/shared.module";
import { InvoicesListComponent } from "./invoices-list/invoices-list.component";

@NgModule({
  declarations: [InvoicesListComponent],
  imports: [CommonModule, InvoicesRoutingModule, SharedModule],
  exports: [InvoicesListComponent]
})
export class InvoicesModule {}
