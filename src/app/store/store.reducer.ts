import * as fromTrackList from "../track-list/store/track-list.reducer";
import * as fromAuth from "../auth/store/auth.reducer";
import * as fromPlaylists from "../playlists/store/playlists.reducer";
import { ActionReducerMap } from "@ngrx/store";

export interface AppState {
  tracks: fromTrackList.State;
  auth: fromAuth.State;
  playlists: fromPlaylists.State;
}

export const appReducer: ActionReducerMap<AppState> = {
  tracks: fromTrackList.trackListReducer,
  auth: fromAuth.authReducer,
  playlists: fromPlaylists.playlistReducer
};
