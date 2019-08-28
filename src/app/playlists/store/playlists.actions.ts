import { Action } from "@ngrx/store";
import { Playlist } from "src/app/playlist";

export const POPULATE_PLAYLIST_SETS = "[playlists] Populate Playlist Sets]";
export const UPDATE_PLAYLIST_SETS = "[playlists] Update Playlist Sets]";

export class UpdatePlaylistSets implements Action {
  readonly type = UPDATE_PLAYLIST_SETS;
  constructor(public payload: { playlistSet: Playlist[]; queryKey: string }) {}
}

export class PopulatePlaylistSets implements Action {
  readonly type = POPULATE_PLAYLIST_SETS;
}
export type PlaylistActions = UpdatePlaylistSets;
