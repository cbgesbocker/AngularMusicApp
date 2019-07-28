import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { AuthService } from "./auth.service";

@Injectable({ providedIn: "root" })
export class HttpService {
  config = environment.apiConfig;
  defaultHeaders = {};

  constructor(private http: HttpClient, private authService: AuthService) {
    this.defaultHeaders = {
      headers: {
        Authorization: "Bearer " + this.authService.accessToken,
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    };
  }

  getApiRequestSet(endpoint: string, options: object = {}) {
    const uri = this.config.apiUrl + endpoint;
    options = {
      ...this.defaultHeaders,
      ...options
    };
    return this.http.get(uri, options);
  }

  postTracksToPlaylist(tracks, playlistId: number): void {
    const endpoint =
      environment.apiConfig.apiUrl +
      "/v1/users/playlists/" +
      playlistId +
      "/tracks";

    const mappedUris = tracks.map(track => track.track.uri);
    debugger;
    this.http.post(endpoint, { uris: mappedUris });
  }
}
