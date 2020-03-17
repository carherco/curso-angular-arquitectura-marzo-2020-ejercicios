import { Component, OnInit } from "@angular/core";
import { User } from "src/app/shared/model/user";
import { UserService } from "src/app/core/user.service";

@Component({
  selector: "user-crud-basic",
  templateUrl: "./user-crud-basic.component.html",
  styleUrls: ["./user-crud-basic.component.css"]
})
export class UserCrudBasicComponent implements OnInit {
  title = "CRUD BÁSICO";
  users: Array<User> = [];
  lastId = 10;
  newUser: User;
  selectedUser: User;
  hide_without_phone: boolean = false;

  constructor(private userService: UserService) {
    this.newUser = {
      id: this.lastId + 1,
      name: ""
    };

    let observable = this.userService.getAll();

    observable.subscribe(resupestaHttpGet => (this.users = resupestaHttpGet));
  }

  ngOnInit() {}

  onSelect(user: User): void {
    this.selectedUser = { ...user };
  }

  add(user: User): void {
    this.users.push(user);
    this.lastId = this.lastId + 1;
    this.resetNewUser();
  }

  resetNewUser() {
    this.newUser = {
      id: this.lastId + 1,
      name: ""
    };
  }

  /**
   * Función delete recibiendo el usuario que se quiere eliminar
   * @param user
   */
  delete(user: User) {
    //this.users = this.users.filter(function(el) { return el.id != user.id; });
    this.users = this.users.filter(el => el.id != user.id);
  }
}
