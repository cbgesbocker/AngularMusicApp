import { Action } from "@ngrx/store";
import * as trackListActions from "./track-list.actions";

const initialState = {
  currentTrackList: [],
  cachedTracks: []
};

export function trackListReducer(state = initialState, action: Action) {
  switch (action.type) {
    case trackListActions.SET_CURRENT_TRACK_LIST:
      return {
        ...initialState,
        trackList: action.payload
      };
  }
}
