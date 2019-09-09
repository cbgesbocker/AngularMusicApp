import { Playlist } from "src/app/libraries/playlist";

import * as PlaylistActions from "./playlists.actions";

export interface State {
  currentSet: Playlist[];
  cachedSet: any;
  currentPlaylistSingle: Playlist;
  cachedPlaylists: Playlist[];
}

const initialState = {
  currentSet: undefined,
  cachedSet: undefined,
  currentPlaylistSingle: undefined,
  cachedPlaylists: []
};

export function playlistReducer(
  state = initialState,
  action: PlaylistActions.PlaylistActions
) {
  switch (action.type) {
    case PlaylistActions.UPDATE_PLAYLIST_SETS:
      return {
        ...state,
        currentSet: action.payload.playlistSet,
        cachedPlaylists: [
          ...state.cachedPlaylists,
          ...action.payload.playlistSet.items
        ]
      };
    case PlaylistActions.UPDATE_PLAYLIST_SINGLE:
      return {
        ...state,
        cachedPlaylists: [...state.cachedPlaylists, action.payload],
        currentPlaylistSingle: action.payload
      };
    default:
      return state;
  }
}
