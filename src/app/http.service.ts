import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { AuthService } from "./auth.service";

@Injectable({ providedIn: "root" })
export class HttpService {
  config = environment.apiConfig;
  defaultOptions = {};

  constructor(private http: HttpClient, private authService: AuthService) {
    this.defaultOptions = {
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
      ...this.defaultOptions,
      ...options
    };
    return this.http.get(uri, options);
  }

  postTracksToPlaylist({
    tracks,
    playlistId
  }: {
    tracks: Array<any>;
    playlistId: Number;
  }): void {
    const endpoint = environment.apiConfig.apiUrl + this.http.post();
  }
}
