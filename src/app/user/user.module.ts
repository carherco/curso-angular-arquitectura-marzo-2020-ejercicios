import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UserRoutingModule } from "./user-routing.module";
import { SharedModule } from "../shared/shared.module";
import { UserListComponent } from "./user-list/user-list.component";
import { UserAddComponent } from './user-add/user-add.component';
import { UserParentComponent } from './user-parent/user-parent.component';

@NgModule({
  declarations: [UserListComponent, UserAddComponent, UserParentComponent],
  imports: [CommonModule, UserRoutingModule, SharedModule],
  exports: [UserListComponent]
})
export class UserModule {}
