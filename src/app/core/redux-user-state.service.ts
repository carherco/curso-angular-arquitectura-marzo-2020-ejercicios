import { Injectable } from "@angular/core";
import { UserState } from "../reducers/user.store";
import { initialUserState, reducer } from "../reducers/users.reducer";
import { BehaviorSubject } from "rxjs";
import { UserAction } from "../reducers/users.actions";

@Injectable({
  providedIn: "root"
})
export class ReduxUserStateService {
  private state: UserState = initialUserState;
  private state$ = new BehaviorSubject<any>(this.state);

  constructor() {}

  public dispatch = (action: UserAction) => {
    console.log(action);
    this.state = reducer(this.state, action);
    this.state$.next(this.getSnapshot());
  };

  public getSnapshot = () => {
    return { ...this.state };
  };

  public select$ = () => this.state$.asObservable();
}
