import { Injectable } from "@angular/core";

export const validEndpoints = environment.apiConfig.endpoints;
import UtilsService from "./utils.service";
import { Store } from "@ngrx/store";
import { authorizeEndpointUrlParams } from "./model.authorization";
import { environment } from "src/environments/environment";

@Injectable({ providedIn: "root" })
export class ApiEndpointsService {
  private clientState: string;

  constructor(private store: Store<{ admin: { clientState: string } }>) {
    this.store.select("admin").subscribe(auth => {
      debugger;
      this.clientState = auth.clientState;
    });
  }

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

  // my tracks
  private refreshTokenEndpoint = new URL(
    ApiEndpointsService.apiUrl + ApiEndpointsService.endpoints.refreshToken
  );

  // my tracks
  private myProfileEndpoint = new URL(
    ApiEndpointsService.apiUrl + ApiEndpointsService.endpoints.myProfile
  );

  // my playlists
  private myPlaylistsEndpoint = new URL(
    ApiEndpointsService.apiUrl + ApiEndpointsService.endpoints.myPlaylists
  );

  getPlaylistTracksUrl(playlistId: number): string {
    return new URL(
      ApiEndpointsService.apiUrl +
        ApiEndpointsService.endpoints.playlistTracks +
        playlistId +
        "/tracks"
    ).href;
  }

  getAuthenticationUrl(): string {
    return UtilsService.buildUrl(new URL(this.authenticationEndpoint), [
      ...authorizeEndpointUrlParams,
      { key: "state", value: this.clientState }
    ]).href;
  }

  getMyTracksUrl(): string {
    return this.myTracksEndpoint.href;
  }

  getMyPlaylistsUrl(): string {
    return this.myPlaylistsEndpoint.href;
  }

  getMyProfileUrl(): string {
    return this.myProfileEndpoint.href;
  }

  getRefreshtokenUrl(): string {
    return this.refreshTokenEndpoint.href;
  }
}
