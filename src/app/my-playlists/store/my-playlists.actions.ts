import { Action } from "@ngrx/store";

export class SetAuth implements Action {
  readonly type;

  constructor(public payload: string) {}
}
