import { Injectable, OnInit } from "@angular/core";
import { HttpService } from "./http.service";

import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class PlaylistsService {
  myPlaylistsEndpoint = environment.apiConfig.endpoints.playlists;
  playlistData;

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
}
