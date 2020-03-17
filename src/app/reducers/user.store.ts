import { User } from "../shared/model/user";

export interface UserState {
  users: User[];
  newUser: User;
  selectedUser: User;
  lastId: number;
}
