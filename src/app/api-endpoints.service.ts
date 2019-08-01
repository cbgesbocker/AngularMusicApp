import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

export const validEndpoints = environment.apiConfig.endpoints;
import { authorizeEndpointUrlParams } from "./model.authorization";

@Injectable({ providedIn: "root" })
export class ApiEndpointsService {
  // api url
  static apiUrl = environment.apiConfig.apiUrl;
  static endpoints = environment.apiConfig.endpoints;

  // authentication base endpoint (no query params)
  private authenticationEndpoint =
    environment.apiConfig.apiAuthAccountsUrl +
    environment.apiConfig.endpoints.auth;

  // my tracks
  private myTracksEndpoint = new URL(
    ApiEndpointsService.apiUrl + ApiEndpointsService.endpoints.myTracks
  );

  // my playlists
  private myPlaylistsEndpoint = new URL(
    ApiEndpointsService.apiUrl + ApiEndpointsService.endpoints.myPlaylists
  );

  constructor() {}

  /**
   * @param url
   * @param params
   */
  static buildUrl(
    url: URL,
    params: Array<{ key: string; value: string }>
  ): URL {
    for (var key in params) {
      const config = params[key];
      url.searchParams.set(config.key, config.value);
    }
    return url;
  }

  /**
   * @param playlistId
   */
  getPlaylistTracksEndpoint(playlistId: number): string {
    return new URL(
      ApiEndpointsService.apiUrl +
        ApiEndpointsService.endpoints.playlistTracks +
        playlistId +
        "/tracks"
    ).href;
  }

  getAuthenticationEndpoint(): string {
    return ApiEndpointsService.buildUrl(
      new URL(this.authenticationEndpoint),
      authorizeEndpointUrlParams
    ).href;
  }

  getMyTracksEndpoint(): string {
    return this.myTracksEndpoint.href;
  }

  getMyPlaylistsEndpoint(): string {
    return this.myPlaylistsEndpoint.href;
  }
}
