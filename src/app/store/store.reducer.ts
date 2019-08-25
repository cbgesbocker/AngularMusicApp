import * as fromTrackList from "../track-list/store/track-list.reducer";
import * as fromAuth from "../auth/store/auth.reducer";
import { ActionReducerMap } from "@ngrx/store";

export interface AppState {
  tracks: fromTrackList.State;
  authState: fromAuth.State;
}

export const appReducer: ActionReducerMap<AppState> = {
  tracks: fromTrackList.trackListReducer,
  authState: fromAuth.authReducer
};
