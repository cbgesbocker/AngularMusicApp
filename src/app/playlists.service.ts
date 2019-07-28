import { Injectable } from "@angular/core";
import { HttpService } from "./http.service";

import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class PlaylistsService {
  myPlaylistsEndpoint = environment.apiConfig.endpoints.playlists;
  playlistData;
  selectedPlaylist;

  constructor(private httpClient: HttpService) {
    this.httpClient
      .getApiRequestSet(this.myPlaylistsEndpoint, {
        params: {
          limit: 50
        }
      })
      .subscribe(data => {
        this.playlistData = data;
      });
  }

  postSelectedTracksToSelectedPlaylist(tracks, playlistId) {
    this.httpClient.postTracksToPlaylist(tracks, playlistId);
  }
}
