import { Action } from "@ngrx/store";
import { TrackList } from "src/app/interface.trackList";

export const SET_TRACKS = "[track-list] SetTracks";
export const FETCH_MY_TRACKS = "[track-list] FetchTracks";

export class SetTracks implements Action {
  readonly type = SET_TRACKS;
  constructor(public payload: TrackList) {}
}

export class FetchTracks implements Action {
  readonly type = FETCH_MY_TRACKS;
  constructor() {}
}

export type TrackActions = FetchTracks | SetTracks;
