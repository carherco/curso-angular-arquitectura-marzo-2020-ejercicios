import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { UserService } from "src/app/core/user.service";
import { User } from "src/app/shared/model/user";

@Component({
  selector: "app-user-edit-page",
  templateUrl: "./user-edit-page.component.html",
  styleUrls: ["./user-edit-page.component.css"]
})
export class UserEditPageComponent implements OnInit {
  id: number;
  user: User;

  constructor(
    private ruta: ActivatedRoute,
    private userService: UserService,
    private route: Router
  ) {
    // this.ruta.queryParams.subscribe(p => {
    //   this.id = p["id"];
    //   this.userService
    //     .getOne(this.id)
    //     .subscribe(respuesta => (this.user = respuesta));
    // });
    // this.id = this.ruta.snapshot.params["id"];
    // this.userService
    //   .getOne(this.id)
    //   .subscribe(respuesta => (this.user = respuesta));

    this.user = this.userService.getSelectedUser();
    this.id = this.user.id;
  }

  ngOnInit(): void {}

  siguiente() {
    this.route.navigate(["users/edit/" + (+this.id + 1)]);
  }
}
