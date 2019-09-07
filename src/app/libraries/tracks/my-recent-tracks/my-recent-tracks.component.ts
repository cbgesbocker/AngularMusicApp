import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable, Subscription } from "rxjs";

import { TracksService } from "../tracks.service";
import { TrackList } from "../../track-list";
import { HttpService } from "../../../http.service";
import { ApiEndpointsService } from "../../../api-endpoints.service";
import * as TrackActions from "../store/track-list.actions";

@Component({
  selector: "app-my-recent-tracks",
  templateUrl: "./my-recent-tracks.component.html",
  styleUrls: ["./my-recent-tracks.component.scss"]
})
export class MyRecentTracksComponent implements OnInit {
  private trackList: TrackList[];
  private sub: Subscription;
  private userDisplayName = "";

  constructor(
    private tracksService: TracksService,
    private store: Store<{ tracks: { myRecentTracks: TrackList[] } }>,
    private http: HttpService,
    private endpointsService: ApiEndpointsService
  ) {
    this.store
      .select("libraries", "tracks", "myRecentTracks")
      .subscribe((list: TrackList[]) => {
        this.trackList = list;
      });
  }

  ngOnInit() {
    if (!this.trackList) {
      this.tracksService.initializeTrackType(new TrackActions.FetchTracks());
      this.http
        .getApiRequest(this.endpointsService.getMyProfileUrl())
        .then(data => {
          this.userDisplayName = data.display_name;
        });
    }
  }
}
