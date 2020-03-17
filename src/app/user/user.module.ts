import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UserRoutingModule } from "./user-routing.module";
import { SharedModule } from "../shared/shared.module";
import { UserListComponent } from "./user-list/user-list.component";
import { UserAddComponent } from "./user-add/user-add.component";
import { UserParentComponent } from "./user-parent/user-parent.component";
import { UserCrudBasicComponent } from "./user-crud-basic/user-crud-basic.component";
import { FormsModule } from "@angular/forms";
import { UserEditComponent } from './user-edit/user-edit.component';

@NgModule({
  declarations: [
    UserListComponent,
    UserAddComponent,
    UserParentComponent,
    UserCrudBasicComponent,
    UserEditComponent
  ],
  imports: [CommonModule, UserRoutingModule, SharedModule, FormsModule],
  exports: [UserListComponent]
})
export class UserModule {}
