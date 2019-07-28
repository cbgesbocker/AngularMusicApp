import { Injectable, OnInit } from "@angular/core";
import { HttpService } from "./http.service";
import { environment } from "src/environments/environment";
import { Tracks } from "./interface.trackList";
import { TrackItem } from "./interface.track";
import { TrackList } from "./interface.trackList";

@Injectable({
  providedIn: "root"
})
export class TracksService {
  private myTracksEndpoint = environment.apiConfig.endpoints.tracks;
  private selectedTracks: Array<string> = [];
  private currentTrackList: TrackList = {};

  constructor(private httpClient: HttpService) {}

  /**
   * initializeTrackData()
   * Fetch tracks and store in obj data
   *
   * @return void
   */
  initializeTrackList() {
    this.httpClient
      .getApiRequestSet(this.myTracksEndpoint, {
        params: {
          limit: 50
        }
      })
      .subscribe((data: Tracks) => {
        this.currentTrackList = data;
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
