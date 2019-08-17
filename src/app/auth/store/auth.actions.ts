import { Action } from "@ngrx/store";

export const SET_AUTH_TOKEN = "SET_AUTH_TOKEN";

export class SetAuth implements Action {
  readonly type = SET_AUTH_TOKEN;
  payload: string;
}
