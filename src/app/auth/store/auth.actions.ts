import { Action } from "@ngrx/store";

export const SET_AUTH_TOKEN = "SET_AUTH_TOKEN";
export const SET_CLIENT_STATE = "SET_CLIENT_STATE";
export const SET_STATE_VALIDITY = "SET_STATE_VALIDITY";

export class SetAuth implements Action {
  readonly type = SET_AUTH_TOKEN;

  constructor(public payload: string) {}
}

export class SetClientState implements Action {
  readonly type = SET_CLIENT_STATE;

  constructor(public payload: string) {}
}

export class SetStateValidity implements Action {
  readonly type = SET_STATE_VALIDITY;

  constructor(public payload: boolean) {}
}
