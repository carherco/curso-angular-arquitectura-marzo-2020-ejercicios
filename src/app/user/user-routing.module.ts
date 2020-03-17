import { UserParentComponent } from "./user-parent/user-parent.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UserListComponent } from "./user-list/user-list.component";
import { UserAddComponent } from "./user-add/user-add.component";
import { UserCrudBasicComponent } from "./user-crud-basic/user-crud-basic.component";
import { UserEditPageComponent } from "./user-edit-page/user-edit-page.component";

const routes: Routes = [
  { path: "", component: UserCrudBasicComponent },
  { path: "edit/:id", component: UserEditPageComponent },
  { path: "edit", component: UserEditPageComponent }
  // { path: "list", component: UserListComponent },
  // { path: "add", component: UserAddComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
