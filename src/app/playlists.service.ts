import { Injectable, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HttpService } from "./http.service";

import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class PlaylistsService implements OnInit {
  playlistData;
  myPlaylistsEndpoint = environment.apiConfig.endpoints.playlists;
  constructor(private httpClient: HttpService) {}

  ngOnInit() {
    this.httpClient
      .getApiRequestSet(myPlaylistsEndpoint, {
        params: {
          limit: 50
        }
      })
      .subscribe(data => {
        debugger;
        this.playlistsData = data;
      });
  }
}
