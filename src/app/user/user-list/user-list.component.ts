import { Component, OnInit, EventEmitter, Input, Output } from "@angular/core";
import { User } from "src/app/shared/model/user";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.css"]
})
export class UserListComponent implements OnInit {
  @Input() users: User[];
  @Input() selectedUser: User;
  @Output() selectEvent: EventEmitter<User> = new EventEmitter();
  @Output() editEvent: EventEmitter<User> = new EventEmitter();
  @Output() deleteEvent: EventEmitter<User> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onSelect(user: User) {
    this.selectEvent.emit(user);
  }

  onEdit(user: User) {
    this.editEvent.emit(user);
  }

  delete(user: User) {
    this.deleteEvent.emit(user);
  }
}
