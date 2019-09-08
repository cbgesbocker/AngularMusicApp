import { Action } from "@ngrx/store";
import { Playlist, PlaylistSet } from "src/app/libraries/playlist";

export const POPULATE_PLAYLIST_SETS = "[playlists] PopulatePlaylistSets]";
export const UPDATE_PLAYLIST_SETS = "[playlists] UpdatePlaylistSets]";
export const UPDATE_PLAYLIST_SINGLE = "[playlists] UpdatePlaylistSingle";
export const POPULATE_PLAYLIST_SINGLE = "[playlists] PopulatePlaylistSingle";
export class UpdatePlaylistSets implements Action {
  readonly type = UPDATE_PLAYLIST_SETS;
  constructor(public payload: { playlistSet: PlaylistSet; queryKey: string }) {}
}

export class PopulateMyPlaylists implements Action {
  readonly type = POPULATE_PLAYLIST_SETS;
}

export class UpdatePlaylistSingle implements Action {
  readonly type = UPDATE_PLAYLIST_SINGLE;
  constructor(public payload: Playlist) {}
}

export class PopulatePlaylistSingle implements Action {
  readonly type = POPULATE_PLAYLIST_SINGLE;
  constructor(public payload: number) {}
}

export type PlaylistActions =
  | UpdatePlaylistSets
  | PopulateMyPlaylists
  | UpdatePlaylistSingle
  | PopulatePlaylistSingle;
