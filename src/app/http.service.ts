import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { environment } from "src/environments/environment";
import { ApiEndpointsService } from "./api-endpoints.service";
import { AuthService } from "./auth/auth.service";
import { Store } from "@ngrx/store";

@Injectable({ providedIn: "root" })
export class HttpService extends ApiEndpointsService {
  /** Network config */
  private config = environment.apiConfig;
  private defaultHeaders = {
    Accept: "application/json",
    "Content-Type": "application/json"
  };
  private headers = {};
  private accessToken = "";

  constructor(
    private http: HttpClient,
    private store: Store<{
      authState: {
        accessToken: string;
      };
    }>
  ) {
    super();
    this.headers = { headers: this.getDefaultHeaders() };
    this.store.select("authState").subscribe(data => {
      this.accessToken = data.accessToken;
    });
  }

  async getApiRequest(endpoint: string, options: object = {}): Promise<any> {
    const request = await this.http
      .get(endpoint, { ...this.headers, ...options })
      .toPromise();
    return request;
  }

  async getMyTracks(): Promise<object> {
    try {
      const apiRequest = await this.getApiRequest(this.getMyTracksUrl());
      return apiRequest;
    } catch (e) {
      return e;
    }
  }

  postTracksToPlaylist(tracks, playlistId: number): void {
    const endpoint = this.getPlaylistTracksUrl(playlistId);
    const mappedUris = tracks.map(track => track.track.uri);

    this.http.post(endpoint, { uris: mappedUris });
  }

  getDefaultHeaders(): Object {
    return {
      ...this.defaultHeaders,
      Authorization: "Bearer " + this.accessToken
    };
  }
}
