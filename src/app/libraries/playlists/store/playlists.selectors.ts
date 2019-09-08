import { AppState } from "src/app/app-state";

export const getCurrentPlaylistSet = (state: AppState) => {
  return state.libraries.playlists.currentSet;
};

export const getPlaylistSingle = (state: AppState) => {
  return state.libraries.playlists.currentPlaylistSingle;
};
