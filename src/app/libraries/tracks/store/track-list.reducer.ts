import { Action } from "@ngrx/store";
import * as TrackListActions from "./track-list.actions";
import { TrackList } from "src/app/libraries/track-list";
import { TrackItem } from "src/app/libraries/track";

export interface State {
  myRecentTracks: TrackItem[];
  cachedTracks: Array<object>;
}

const initialState = {
  myRecentTracks: null,
  cachedTracks: null
};

export function trackListReducer(
  state = initialState,
  action: TrackListActions.SetTracks
) {
  switch (action.type) {
    case TrackListActions.SET_TRACKS:
      return {
        ...initialState,
        myRecentTracks: action.payload
      };
    default:
      return state;
  }
}
