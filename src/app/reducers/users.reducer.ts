import { UserState } from "./user.store";
import { UserAction } from "./users.actions";

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
  let newstate = { ...state };
  switch (action.type) {
    case "[USER]_Load":
      newstate.users = action.payload;
      break;
    case "[USER]_Add":
      newstate.users = newstate.users.slice(0); //Una forma de clonar arrays
      newstate.users.push(action.payload);
      newstate.lastId = newstate.lastId + 1;
      break;
    case "[USER]_Delete":
      let user = action.payload;
      newstate.users = newstate.users.filter(function(el) {
        return el.id != user.id;
      });
      break;
    default:
      return state;
  }
  return newstate;
}
