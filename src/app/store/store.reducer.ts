import * as fromTrackList from "../track-list/store/track-list.reducer";
import * as fromAuth from "../auth/store/auth.reducer";
import { ActionReducerMap } from "@ngrx/store";

export interface AppState {
  trackList: fromTrackList.State;
  authState: fromAuth.State;
}

export const appReducer: ActionReducerMap<AppState> = {
  trackList: fromTrackList.trackListReducer,
  authState: fromAuth.authReducer
};
