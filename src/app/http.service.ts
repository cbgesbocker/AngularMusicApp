import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { AuthService } from "./auth.service";
import { ApiEndpointsService, validEndpoints } from "./api-endpoints.service";

@Injectable({ providedIn: "root" })
export class HttpService {
  config = environment.apiConfig;
  headers = {
    Authorization: "Bearer " + AuthService.accessToken,
    Accept: "application/json",
    "Content-Type": "application/json"
  };

  constructor(
    private apiEndpoints: ApiEndpointsService,
    private http: HttpClient
  ) {}

  /**
   *
   * @param endpoint
   * @param options
   *
   * @return Observable
   */
  getApiRequestSet(endpoint: string, options: object = {}) {
    const endpoint = this.apiEndpoints.getBuiltEndpoint(
      validEndpoints[endpoint]
    );
    options = {
      ...this.headers,
      ...options
    };
    return this.http.get(uri, options);
  }

  /**
   *
   * @param tracks
   * @param playlistId
   *
   * @return void
   */
  postTracksToPlaylist(tracks, playlistId: number): void {
    const endpoint = this.apiEndpoints.getBuiltEndpoint(
      validEndpoints.playlistTracks,
      String(playlistId)
    );

    const mappedUris = tracks.map(track => track.track.uri);
    this.http.post(endpoint, { uris: mappedUris });
  }
}
