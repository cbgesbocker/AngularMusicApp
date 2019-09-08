import { Playlist } from "src/app/libraries/playlist";

import * as PlaylistActions from "./playlists.actions";

export interface State {
  currentSet: Playlist[];
  cachedSet: any;
  currentPlaylistSingle: Playlist;
}

const initialState = {
  currentSet: undefined,
  cachedSet: undefined,
  currentPlaylistSingle: undefined
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
        cachedSet: {
          ...state.cachedSet,
          ...(action.payload.queryKey
            ? {
                [action.payload.queryKey]: action.payload.playlistSet
              }
            : {})
        }
      };
    case PlaylistActions.UPDATE_PLAYLIST_SINGLE:
      return {
        ...state,
        currentPlaylistSingle: action.payload
      };
    default:
      return state;
  }
}
