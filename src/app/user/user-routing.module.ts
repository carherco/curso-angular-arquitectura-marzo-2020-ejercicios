import { UserParentComponent } from "./user-parent/user-parent.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UserListComponent } from "./user-list/user-list.component";
import { UserAddComponent } from "./user-add/user-add.component";

const routes: Routes = [
  { path: "", component: UserParentComponent },
  { path: "list", component: UserListComponent },
  { path: "add", component: UserAddComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
