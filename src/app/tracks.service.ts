import { Injectable, OnInit } from "@angular/core";
import { HttpService } from "./http.service";
import { environment } from "src/environments/environment";
import { TrackItem } from "./interface.track";
import { TrackList } from "./interface.trackList";
import { ApiEndpointsService } from "./api-endpoints.service";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class TracksService {
  private selectedTracks: Array<string> = [];

  currentTrackList: Observable<{ trackList: TrackList }>;

  constructor(
    private httpClient: HttpService,
    private apiEndpointsService: ApiEndpointsService,
    private store: Store<{ trackList: { tracks: TrackItem[] } }>
  ) {}

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
