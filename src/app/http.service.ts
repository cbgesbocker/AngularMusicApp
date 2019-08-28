import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { environment } from "src/environments/environment";
import { ApiEndpointsService } from "./api-endpoints.service";
import { AuthService } from "./auth/auth.service";
import { Store } from "@ngrx/store";

@Injectable({ providedIn: "root" })
export class HttpService {
  /** Network config */
  private readonly clientSecret = environment.apiConfig.client_secret;
  private readonly clientId = environment.apiConfig.client_id;
  private readonly defaultHeaders = {
    Accept: "application/json",
    "Content-Type": "application/json"
  };

  private accessToken = "";

  constructor(
    private http: HttpClient,
    private store: Store<{
      auth: {
        accessToken: string;
      };
    }>,
    private endpointsService: ApiEndpointsService
  ) {
    this.store.select("auth").subscribe(data => {
      this.accessToken = data.accessToken;
    });
  }

  async getApiRequest(endpoint: string, options: object = {}): Promise<any> {
    const headers = this.getDefaultHeaders();

    const request = await this.http
      .get(endpoint, { headers, ...options })
      .toPromise();
    return request;
  }

  async postApiRequest(endpoint: string, options: object = {}): Promise<any> {
    const headers = this.getDefaultHeaders();

    const request = await this.http
      .post(endpoint, { headers, ...options })
      .toPromise();
    return request;
  }

  postTracksToPlaylist(tracks, playlistId: number): void {
    const endpoint = this.endpointsService.getPlaylistTracksUrl(playlistId);
    const mappedUris = tracks.map(track => track.track.uri);

    this.http.post(endpoint, { uris: mappedUris });
  }

  getDefaultHeaders() {
    return {
      ...this.defaultHeaders,
      Authorization: "Bearer " + this.accessToken
    };
  }

  getRefreshTokenHeaders(): any {
    return {
      ...this.defaultHeaders,
      Authorization: "Basic " + btoa(`${this.clientId}:${this.clientSecret}`)
    };
  }
}
