import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { Lazy4Component } from "./lazy4/lazy4.component";

const routes: Routes = [{ path: "", component: Lazy4Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Lazy4RoutingModule {}
