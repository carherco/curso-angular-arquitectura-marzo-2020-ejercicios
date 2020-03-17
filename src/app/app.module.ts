import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CoreModule } from "./core/core.module";
import { SharedModule } from "./shared/shared.module";
import { UserModule } from "./user/user.module";
import { InvoicesModule } from "./invoices/invoices.module";
import { Lazy1Module } from "./lazy1/lazy1.module";
import { Lazy2Module } from "./lazy2/lazy2.module";
import { Lazy3Module } from "./lazy3/lazy3.module";
import { Lazy4Module } from "./lazy4/lazy4.module";
import { Lazy5Module } from "./lazy5/lazy5.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    UserModule
    //InvoicesModule,
    //Lazy1Module,
    //Lazy2Module,
    //Lazy3Module,
    //Lazy4Module,
    //Lazy5Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
