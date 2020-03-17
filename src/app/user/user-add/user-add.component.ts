import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { User } from "src/app/shared/model/user";

@Component({
  selector: "app-user-add",
  templateUrl: "./user-add.component.html",
  styleUrls: ["./user-add.component.css"]
})
export class UserAddComponent implements OnInit {
  @Input() newUser: User;
  @Output() addEvent: EventEmitter<User> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  add() {
    if (this.newUser.name) {
      this.addEvent.emit(this.newUser);
    }
  }
}
