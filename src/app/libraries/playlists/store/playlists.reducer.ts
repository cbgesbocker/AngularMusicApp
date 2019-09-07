import { Playlist } from "src/app/libraries/playlist";

import * as PlaylistActions from "./playlists.actions";

export interface State {
  currentSet: Playlist[];
  cachedSet: any;
}

const initialState = {
  currentSet: undefined,
  cachedSet: undefined
};

export function playlistReducer(
  state = initialState,
  action: PlaylistActions.PlaylistActions
) {
  switch (action.type) {
    case PlaylistActions.UPDATE_PLAYLIST_SETS:
      return {
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
    default:
      return state;
  }
}
