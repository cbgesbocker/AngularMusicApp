import { Action } from "@ngrx/store";
import { TrackList } from "src/app/interface.trackList";

export const SET_CURRENT_TRACK_LIST = "SET_CURRENT_TRACK_LIST";

export class SetTracks implements Action {
  readonly type = SET_CURRENT_TRACK_LIST;
  constructor(public payload: TrackList) {}
}
