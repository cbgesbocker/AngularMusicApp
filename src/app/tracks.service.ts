import { Injectable, OnInit } from "@angular/core";
import { HttpService } from "./http.service";
import { environment } from "src/environments/environment";
import { Tracks } from "./tracks";
import { TrackItem } from "./interface.track";

@Injectable({
  providedIn: "root"
})
export class TracksService {
  private myTracksEndpoint = environment.apiConfig.endpoints.tracks;
  private trackData: object;
  private selectedTracks: Array<string> = [];

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

  /**
   * toggleSelectedTrack()
   * update list of selected track IDs when clicking on a track
   *
   * @param trackItem: TrackItem  @return void
   */
  toggleSelectedTrack(trackItem: TrackItem): void {
    // Look for track that was clicked on
    const search = this.selectedTracks.find(id => {
      return trackItem.track.id === id;
    });

    // If not in list, add it
    if (search === undefined) {
      this.selectedTracks = [...this.selectedTracks, trackItem.track.id];
    } else {
      // If in list, remove it
      this.selectedTracks = this.selectedTracks.filter(
        id => id !== trackItem.track.id
      );
    }
  }

  postTracks() {}
}
