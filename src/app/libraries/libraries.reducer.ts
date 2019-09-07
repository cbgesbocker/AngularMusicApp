import * as fromTrackList from "./tracks/store/track-list.reducer";
import * as fromPlaylists from "./playlists/playlist-set/store/playlists.reducer";

import { ActionReducerMap } from "@ngrx/store";

export interface LibrariesState {
  tracks: fromTrackList.State;
  playlists: fromPlaylists.State;
}

export const reducer: ActionReducerMap<LibrariesState> = {
  tracks: fromTrackList.trackListReducer,
  playlists: fromPlaylists.playlistReducer
};
