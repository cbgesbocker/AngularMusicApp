import { Injectable, OnInit } from "@angular/core";
import { HttpService } from "./http.service";
import { environment } from "src/environments/environment";
import { Tracks } from "./tracks";

@Injectable({
  providedIn: "root"
})
export class TracksService {
  myTracksEndpoint = environment.apiConfig.endpoints.tracks;
  trackData;
  selectedTracks = [];

  constructor(private httpClient: HttpService) {
    this.httpClient
      .getApiRequestSet(this.myTracksEndpoint, {
        params: {
          limit: 50
        }
      })
      .subscribe((data: Tracks) => {
        this.trackData = data;
      });
  }

  addTrack(track): void {
    this.selectedTracks.unshift(track);
  }

  removeTrack(track): void {
    this.selectedTracks = this.selectedTracks.filter(
      item => item.track.id !== track.track.id
    );
  }

  postTracks() {}
}
