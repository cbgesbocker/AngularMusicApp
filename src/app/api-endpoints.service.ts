import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

export const validEndpoints = environment.apiConfig.endpoints;

@Injectable({
  providedIn: "root"
})
export class ApiEndpointsService {
  apiUrl = environment.apiConfig.apiUrl;

  // authorization url
  apiAccountAuthUrl = new URL(
    environment.apiConfig.apiAccountsUrl + environment.apiConfig.endpoints.auth
  ).searchParams.set("scope", encodeURIComponent(environment.apiConfig.scope));

  constructor() {}

  /**
   * @param endpoint
   * @param urlParam
   */
  getBuiltEndpoint(endpoint: string, urlParam: string = "") {
    switch (endpoint) {
      case validEndpoints.playlistTracks:
        return (
          this.apiUrl +
          environment.apiConfig.endpoints.playlistTracks +
          urlParam +
          "/tracks"
        );
      case validEndpoints.myTracks:
        return this.apiUrl + validEndpoints.myTracks;
      default:
        throw new Error("no valid endpoint found");
    }
  }
}
