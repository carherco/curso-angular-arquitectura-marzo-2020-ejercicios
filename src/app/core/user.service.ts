import { Observable, of, Subject } from "rxjs";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { tap } from "rxjs/operators";
import { User } from "../shared/model/user";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class UserService {
  private url_api: string;
  private selectedUser: User;
  private users: Array<User> = null;
  private lastId = 10;
  private newUser: User;

  constructor(private http: HttpClient) {
    this.url_api = environment.api_url + "users";
  }

  getAll(): Observable<User[]> {
    if (this.users) {
      return of(this.users);
    }

    return this.http
      .get<User[]>(this.url_api)
      .pipe(tap(respuesta => (this.users = respuesta)));
  }

  getOne(id): Observable<any> {
    return this.http.get<User>(this.url_api + "/" + id);
  }

  add(user: User) {
    return this.http.post(this.url_api, user);
  }

  edit(user: User) {
    return this.http.put(this.url_api + "/" + user.id, user);
  }

  delete(id) {
    return this.http.delete(this.url_api + "/" + id);
  }

  setSelectedUser(user: User) {
    this.selectedUser = user;
  }

  getSelectedUser() {
    return { ...this.selectedUser };
  }
}
