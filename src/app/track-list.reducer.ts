import { Action } from "@ngrx/store";

const initialState = {
  trackList: []
};

export function trackListReducer(state = initialState, action: Action) {
  switch (action.type) {
    case "SET_TRACK_LIST":
      return {
        ...initialState,
        trackList: action.payload
      };
  }
}
