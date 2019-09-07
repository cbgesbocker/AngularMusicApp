import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { User } from "../user";
import { Observable } from "rxjs";

import * as UserActions from "./store/user.actions";
@Injectable({
  providedIn: "root"
})
export class UsersService {
  currentUser$: Observable<User>;
  constructor(private store: Store<{ users: { userSignedIn: User } }>) {}

  fetchMyProfile() {
    this.store.dispatch(new UserActions.PopulateUserData());
    this.currentUser$ = this.store.select("users", "userSignedIn");
  }
}
