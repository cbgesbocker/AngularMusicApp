import { Action } from "@ngrx/store";
import { User } from "src/app/user";

export const SET_USER_DATA = "[user] SetUserData]";
export const POPULATE_USER_DATA = "[user] PopulateUserData]";

export class SetUserData implements Action {
  readonly type = SET_USER_DATA;
  constructor(public payload: User) {}
}

export class PopulateUserData implements Action {
  debugger;
  readonly type = POPULATE_USER_DATA;
}

export type UserActions = SetUserData | PopulateUserData;
