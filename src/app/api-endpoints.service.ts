import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

export const validEndpoints = environment.apiConfig.endpoints;
import { authorizeEndpointUrlParams } from "./model.authorization";

@Injectable({ providedIn: "root" })
export class ApiEndpointsService {
  // api url
  static apiUrl = environment.apiConfig.apiUrl;

  static endpointsNamespace = {
    auth: "auth",
    myTracks: "myTracks",
    myPlaylists: "myPlaylists",
    playlistTracks: "playlistTracks"
  };

  constructor() {}

  /**
   * @param endpoint
   * @param urlParam
   */
  getBuiltEndpoint(endpoint: string, urlParam: string = ""): URL {
    let apiUrl: URL;
    let urlString: string;

    switch (endpoint) {
      case ApiEndpointsService.endpointsNamespace.playlistTracks:
        apiUrl = new URL(
          ApiEndpointsService.apiUrl +
            environment.apiConfig.endpoints.playlistTracks +
            urlParam +
            "/tracks"
        );
        break;
      case ApiEndpointsService.endpointsNamespace.auth:
        urlString =
          environment.apiConfig.apiAuthAccountsUrl +
          environment.apiConfig.endpoints.auth;
        const apiAuthAccountsUrl = ApiEndpointsService.buildUrl(
          new URL(urlString),
          authorizeEndpointUrlParams
        );
        apiUrl = apiAuthAccountsUrl;
        break;
      case ApiEndpointsService.endpointsNamespace.myTracks:
        urlString = ApiEndpointsService.apiUrl + validEndpoints.myTracks;
        apiUrl = new URL(urlString);
        break;
      default:
        apiUrl = new URL("");
        break;
    }
    return apiUrl;
  }

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
}
