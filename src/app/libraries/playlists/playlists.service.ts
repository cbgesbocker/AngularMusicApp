import { Injectable } from "@angular/core";
import { HttpService } from "../../http.service";
import { Store } from "@ngrx/store";
import { Playlist } from "../playlist";
import * as PlaylistActions from "./store/playlists.actions";

@Injectable({
  providedIn: "root"
})
export class PlaylistsService {
  constructor(
    private httpClient: HttpService,
    public store: Store<{
      playlists: { currentSet: Playlist[]; cachedSet: any };
    }>
  ) {}

  populatePlaylistData(actionInstance: PlaylistActions.PlaylistActions): void {
    this.store.dispatch(actionInstance);
  }

  /**
   * Add the tracks that are currently selected to the playlist ID
   */
  postSelectedTracksToSelectedPlaylist(tracks, playlistId): void {
    this.httpClient.postTracksToPlaylist(tracks, playlistId);
  }
}
