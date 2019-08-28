import { Action } from "@ngrx/store";
import { Playlist } from "src/app/playlist";

export const SET_CURRENT_PLAYLIST = "SET_CURRENT_PLAYLIST";
export const UPDATE_PLAYLIST_SETS = "UPDATE_PLAYLIST_SETS";
export class UpdatePlaylistSets implements Action {
  readonly type = UPDATE_PLAYLIST_SETS;
  constructor(public payload: { playlistSet: Playlist[]; queryKey: string }) {}
}

export type PlaylistActions = UpdatePlaylistSets;
