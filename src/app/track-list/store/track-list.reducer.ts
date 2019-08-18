import { Action } from "@ngrx/store";
import * as TrackListActions from "./track-list.actions";

export interface State {
  currentTrackList: Array<object>;
  cachedTracks: Array<object>;
}

const initialState = {
  currentTrackList: [],
  cachedTracks: []
};

export function trackListReducer(
  state = initialState,
  action: TrackListActions.SetTracks
) {
  switch (action.type) {
    case TrackListActions.SET_CURRENT_TRACK_LIST:
      return {
        ...initialState,
        trackList: action.payload
      };
    default:
      return state;
  }
}
