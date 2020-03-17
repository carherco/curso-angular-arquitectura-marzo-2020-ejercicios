import { User } from "../shared/model/user";

export enum UserActionTypes {
  LoadUsers = "[USER]_Load",
  AddUser = "[USER]_Add",
  DeleteUser = "[USER]_Delete"
}

export interface UserAction {
  readonly type: string;
  readonly payload?: any;
}

export class LoadUsers implements UserAction {
  readonly type = UserActionTypes.LoadUsers;
  constructor(public readonly payload: User[]) {}
}

export class AddUser implements UserAction {
  readonly type = UserActionTypes.AddUser;
  constructor(public readonly payload: User) {}
}

export class DeleteUser implements UserAction {
  readonly type = UserActionTypes.DeleteUser;
  constructor(public readonly payload: User) {}
}

export type UserActions = LoadUsers | AddUser | DeleteUser;
