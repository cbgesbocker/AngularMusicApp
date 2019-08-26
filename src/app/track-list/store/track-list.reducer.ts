import { Action } from "@ngrx/store";
import * as TrackListActions from "./track-list.actions";
import { TrackList } from "src/app/interface.trackList";
import { TrackItem } from "src/app/interface.track";

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
    case TrackListActions.SET_CURRENT_TRACK_LIST:
      return {
        ...initialState,
        myRecentTracks: action.payload
      };
    default:
      return state;
  }
}
