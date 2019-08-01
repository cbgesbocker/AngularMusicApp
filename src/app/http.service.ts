import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { AuthService } from "./auth.service";
import { ApiEndpointsService, validEndpoints } from "./api-endpoints.service";
import { Observable } from "rxjs";

@Injectable({ providedIn: "root" })
export class HttpService {
  config = environment.apiConfig;
  headers = {
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
   */
  getApiRequestSet(endpoint: string, options: object = {}) {
    return this.http.get(endpoint, {
      headers: { ...this.headers },
      ...options
    });
  }

  /**
   *
   * @param tracks
   * @param playlistId
   *
   * @return void
   */
  postTracksToPlaylist(tracks, playlistId: number): void {
    const endpoint = this.apiEndpoints.getPlaylistTracksEndpoint(playlistId);
    const mappedUris = tracks.map(track => track.track.uri);

    this.http.post(endpoint.href, { uris: mappedUris });
  }

  /** */
  getHeaders() {
    return {
      ...this.headers,
      Authorization: "Bearer " + AuthService.accessToken
    };
  }
}
