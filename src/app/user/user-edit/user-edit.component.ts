import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { User } from "src/app/shared/model/user";

@Component({
  selector: "app-user-edit",
  templateUrl: "./user-edit.component.html",
  styleUrls: ["./user-edit.component.css"]
})
export class UserEditComponent implements OnInit {
  @Input() user: User;
  @Output() deleteEvent: EventEmitter<User> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  deleteFromEdit() {
    this.deleteEvent.emit(this.user);
  }
}
