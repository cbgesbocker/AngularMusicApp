import * as fromTrackList from "../libraries/tracks/track-list/store/track-list.reducer";
import * as fromPlaylists from "../playlists/store/playlists.reducer";
import { ActionReducerMap } from "@ngrx/store";

export interface LibrariesState {
  tracks: fromTrackList.State;
  playlists: fromPlaylists.State;
}

export const reducer: ActionReducerMap<LibrariesState> = {
  tracks: fromTrackList.trackListReducer,
  playlists: fromPlaylists.playlistReducer
};
