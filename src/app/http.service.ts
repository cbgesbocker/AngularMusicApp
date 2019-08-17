import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { environment } from "src/environments/environment";
import { ApiEndpointsService } from "./api-endpoints.service";
import { AuthService } from "./auth/auth.service";

@Injectable({ providedIn: "root" })
export class HttpService extends ApiEndpointsService {
  constructor(
    private http: HttpClient,
    private authService: AuthService,
    /** Network config */
    private config = environment.apiConfig,
    private defaultHeaders = {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    private headers = {}
  ) {
    super();
    this.headers = { headers: this.getDefaultHeaders() };
  }

  async getApiRequest(endpoint: string, options: object = {}): Promise<any> {
    const request = await this.http
      .get(endpoint, { ...this.headers, ...options })
      .toPromise();
    return request;
  }

  async getMyTracks(): Promise<object> {
    try {
      const apiRequest = await this.getApiRequest(this.getMyTracksEndpoint());
      return apiRequest;
    } catch (e) {
      return e;
    }
  }

  postTracksToPlaylist(tracks, playlistId: number): void {
    const endpoint = this.getPlaylistTracksEndpoint(playlistId);
    const mappedUris = tracks.map(track => track.track.uri);

    this.http.post(endpoint, { uris: mappedUris });
  }

  getDefaultHeaders(): Object {
    return {
      ...this.defaultHeaders,
      Authorization: "Bearer " + this.authService.getAccessToken()
    };
  }
}
