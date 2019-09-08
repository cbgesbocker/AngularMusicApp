import { Injectable, OnDestroy } from "@angular/core";
import { Store } from "@ngrx/store";
import { User } from "../user";
import { Observable, Subscription } from "rxjs";

import * as UserActions from "./store/user.actions";
@Injectable({
  providedIn: "root"
})
export class UsersService implements OnDestroy {
  currentUser$: Observable<User>;
  user: User;
  sub: Subscription;

  constructor(private store: Store<{ users: { userSignedIn: User } }>) {}

  bindMyProfile() {
    this.sub = this.store
      .select("users", "userSignedIn")
      .subscribe((user: User) => {
        this.user = user;
      });
  }

  fetchMyProfile() {
    if (this.user === undefined) {
      this.store.dispatch(new UserActions.PopulateUserData());
    }
  }

  getFeatureStoreObservable(key: string): Observable<any> {
    return this.store.select("users", key);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
