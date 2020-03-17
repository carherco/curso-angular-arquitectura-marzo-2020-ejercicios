import { SelectivePreloadingStrategyService } from "./core/selective-preloading-strategy.service";
import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { UserListComponent } from "./user/user-list/user-list.component";
import { InvoicesListComponent } from "./invoices/invoices-list/invoices-list.component";
import { UserAddComponent } from "./user/user-add/user-add.component";
import { UserParentComponent } from "./user/user-parent/user-parent.component";
import { CoreModule } from "./core/core.module";

const routes: Routes = [
  {
    path: "users",
    loadChildren: () =>
      import("./user/user.module").then(mod => mod.UserModule),
    data: { preload: true }
  },
  {
    path: "invoices",
    loadChildren: () =>
      import("./invoices/invoices.module").then(mod => mod.InvoicesModule),
    data: { preload: true }
  },
  {
    path: "lazy1",
    loadChildren: () =>
      import("./lazy1/lazy1.module").then(mod => mod.Lazy1Module),
    data: { preload: false }
  },
  {
    path: "lazy2",
    loadChildren: () =>
      import("./lazy2/lazy2.module").then(mod => mod.Lazy2Module),
    data: { preload: false }
  },
  {
    path: "lazy3",
    loadChildren: () =>
      import("./lazy3/lazy3.module").then(mod => mod.Lazy3Module),
    data: { preload: false }
  },
  {
    path: "lazy4",
    loadChildren: () =>
      import("./lazy4/lazy4.module").then(mod => mod.Lazy4Module),
    data: { preload: true }
  },
  {
    path: "lazy5",
    loadChildren: () =>
      import("./lazy5/lazy5.module").then(mod => mod.Lazy5Module),
    data: { preload: false }
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: SelectivePreloadingStrategyService
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
