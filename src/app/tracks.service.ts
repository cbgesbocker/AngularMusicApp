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
export class TracksService {
  readonly trackTypes = {
    myRecentTracks: "MY_RECENT_TRACKS"
  };

  public selectedTrackItems: TrackItem[] = [];
  private tracks: Observable<{ myRecentTracks: TrackItem[] }>;

  constructor(
    private httpClient: HttpService,
    private endpointsService: ApiEndpointsService,
    private store: Store<{ tracks: { myRecentTracks: TrackItem[] } }>
  ) {
    console.log(this.selectedTrackItems);
    this.tracks = this.store.select("tracks");
  }

  initializeTrackType(trackAction: TrackActions.TrackActions): void {
    this.store.dispatch(trackAction);
  }

  updateTrackList(trackItem: TrackItem, add: boolean) {
    if (add) {
      this.selectedTrackItems = [...this.selectedTrackItems, trackItem];
    } else {
      this.selectedTrackItems = this.selectedTrackItems.filter(
        (item: TrackItem) => item.track.id !== trackItem.track.id
      );
    }
  }

  async getMyRecentTracks(): Promise<object> {
    try {
      const apiRequest = await this.httpClient.getApiRequest(
        this.endpointsService.getMyTracksUrl()
      );
      return apiRequest;
    } catch (e) {
      return e;
    }
  }

  /**
   * update list of selected track IDs when clicking on a track
   */

  toggleSelectedTrack(trackItem: TrackItem, selected: boolean): void {
    if (selected) {
      if (this.selectedTrackItems.length === 0) {
        this.selectedTrackItems = [trackItem];
      } else {
        this.selectedTrackItems = [...this.selectedTrackItems, trackItem];
      }
    } else {
      this.selectedTrackItems = this.selectedTrackItems.filter(
        $trackItem => $trackItem.track.id !== trackItem.track.id
      );
    }
  }

  postTracks() {}
}
