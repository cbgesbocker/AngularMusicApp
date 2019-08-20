import { Injectable, OnDestroy } from "@angular/core";
import { HttpService } from "./http.service";
import { TrackItem } from "./interface.track";
import { Store } from "@ngrx/store";

import { ApiEndpointsService } from "./api-endpoints.service";
import * as TrackActions from "./track-list/store/track-list.actions";
import { TrackList } from "./interface.trackList";
import { Observable, Subscription } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class TracksService extends ApiEndpointsService implements OnDestroy {
  private selectedTracks: Array<string> = [];

  private currentTrackList: TrackItem[];
  private subscription: Subscription;

  constructor(
    private httpClient: HttpService,
    private store: Store<{ trackList: { tracks: TrackItem[] } }>
  ) {
    super();

    // Subscribe to
    this.subscription = this.store.select("trackList").subscribe(data => {
      this.currentTrackList = data.tracks;
    });
  }

  initializeTrackList(): void {
    this.httpClient.getMyTracks().then((trackList: TrackList) => {
      this.store.dispatch(new TrackActions.SetTracks(trackList));
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
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
