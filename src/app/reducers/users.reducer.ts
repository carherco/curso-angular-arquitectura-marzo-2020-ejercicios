import { UserState } from "./user.store";
import { UserAction, UserActionTypes } from "./users.actions";

export const initialUserState: UserState = {
  users: [],
  newUser: { id: 21, name: "" },
  selectedUser: null,
  lastId: 20
};

export function reducer(
  state = initialUserState,
  action: UserAction
): UserState {
  const newstate = { ...state };
  switch (action.type) {
    case UserActionTypes.LoadUsers:
      newstate.users = action.payload;
      break;
    case UserActionTypes.AddUser:
      newstate.users = [...state.users];
      newstate.users.push(action.payload);
      newstate.lastId = newstate.lastId + 1;
      newstate.newUser = {
        id: newstate.lastId,
        name: ""
      };
      break;
    case UserActionTypes.DeleteUser:
      const user = action.payload;
      newstate.users = newstate.users.filter(el => el.id !== user.id);
      break;
    case UserActionTypes.SelectUser:
      newstate.selectedUser = { ...action.payload };
      break;
    default:
      return state;
  }
  return newstate;
}
