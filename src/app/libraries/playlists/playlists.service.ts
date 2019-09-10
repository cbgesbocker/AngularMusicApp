import { Injectable } from "@angular/core";
import { HttpService } from "../../http.service";
import { Store } from "@ngrx/store";
import { Playlist, PlaylistSet } from "../playlist";
import * as PlaylistActions from "./store/playlists.actions";
import { Observable } from "rxjs";
import { PlaylistCache } from "src/app/playlist-cache";

@Injectable({
  providedIn: "root"
})
export class PlaylistsService {
  private playlistCache: PlaylistCache = [];
  private currentPlaylistSet$: Observable<PlaylistSet>;
  private playlistSingle$: Observable<Playlist>;
  private selectedPlaylist: Playlist;

  constructor(
    private httpClient: HttpService,
    private store: Store<{
      libraries: {
        playlists: { cachedPlaylists: Playlist[]; currentSet: Playlist[] };
      };
    }>
  ) {
    this.store
      .select("libraries", "playlists", "cachedPlaylists")
      .subscribe((cachedPlaylists: PlaylistCache) => {
        this.playlistCache = cachedPlaylists;
      });
  }

  populatePlaylistSingle(id: string): void {
    const cachedPlaylist = this.playlistCache.find((playlist: Playlist) => {
      return playlist.id === id;
    });
    if (!cachedPlaylist) {
      this.store.dispatch(new PlaylistActions.PopulatePlaylistSingle(id));
    } else {
      this.store.dispatch(
        new PlaylistActions.UpdatePlaylistSingle(cachedPlaylist)
      );
    }
  }

  selectPlaylist(playlist: Playlist): void {
    this.selectedPlaylist = playlist;
  }

  isSelectedPlaylist(playlist: Playlist): boolean {
    return this.selectedPlaylist && this.selectedPlaylist.id === playlist.id;
  }

  populateMyPlaylists() {
    this.currentPlaylistSet$ = this.getFeatureStoreObservable("currentSet");
    this.store.dispatch(new PlaylistActions.PopulateMyPlaylists());
  }

  getFeatureStoreObservable(key: string): Observable<any> {
    return this.store.select("libraries", "playlists", key);
  }

  /**
   * Add the tracks that are currently selected to the playlist ID
   */
  postSelectedTracksToSelectedPlaylist(tracks, playlistId): void {
    this.httpClient.postTracksToPlaylist(tracks, playlistId);
  }
}
