import { ReduxUserStateService } from "./../../core/redux-user-state.service";
import { Component, OnInit } from "@angular/core";
import { User } from "src/app/shared/model/user";
import { UserService } from "src/app/core/user.service";
import { Router } from "@angular/router";
import { UserState } from "src/app/reducers/user.store";
import { LoadUsers, AddUser, DeleteUser } from "src/app/reducers/users.actions";

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

  constructor(
    private stateService: ReduxUserStateService,
    private userService: UserService,
    private router: Router
  ) {
    // this.newUser = {
    //   id: this.lastId + 1,
    //   name: ""
    // };

    // let observable = this.userService.getAll();
    // observable.subscribe(resupestaHttpGet => (this.users = resupestaHttpGet));

    this.stateService.select$().subscribe((state: UserState) => {
      this.users = state.users;
      this.newUser = state.newUser;
      this.selectedUser = state.selectedUser;
      this.lastId = state.lastId;
    });

    this.userService
      .getAll()
      .subscribe(respuesta =>
        this.stateService.dispatch(new LoadUsers(respuesta))
      );
  }

  ngOnInit() {
    // if(this.userService.hayCosasGuardadas()) {
    //   this.filtro = this.userService.getFiltro();
    // }
  }

  ngOnDestroy() {
    // this.userService.guardarFiltro(this.filtro);
  }

  onSelect(user: User): void {
    this.selectedUser = { ...user };
  }

  goToEdit(user: User) {
    // this.router.navigate(["/users/edit/" + user.id]); // por param
    // this.router.navigate(["/users/edit?id=" + user.id]); // por query-param
    // this.userService.selectedUser = user; // property bag con propiedades públicas
    this.userService.setSelectedUser(user); // property bag con getters y setters
    this.router.navigate(["/users/edit"]);
  }

  add(user: User): void {
    // this.users.push(user);
    // this.lastId = this.lastId + 1;
    this.stateService.dispatch(new AddUser(user));
  }

  // resetNewUser() {
  //   this.newUser = {
  //     id: this.lastId + 1,
  //     name: ""
  //   };
  // }

  /**
   * Función delete recibiendo el usuario que se quiere eliminar
   * @param user
   */
  delete(user: User) {
    //this.users = this.users.filter(function(el) { return el.id != user.id; });
    //this.users = this.users.filter(el => el.id != user.id);
    this.stateService.dispatch(new DeleteUser(user));
  }
}
