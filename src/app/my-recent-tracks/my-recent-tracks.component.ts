import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { TracksService } from "../tracks.service";
import { TrackList } from "../interface.trackList";
import { HttpService } from "../http.service";
import { ApiEndpointsService } from "../api-endpoints.service";

@Component({
  selector: "app-my-recent-tracks",
  templateUrl: "./my-recent-tracks.component.html",
  styleUrls: ["./my-recent-tracks.component.scss"]
})
export class MyRecentTracksComponent implements OnInit {
  private tracks$: Observable<{ myRecentTracks: TrackList[] }>;
  private userDisplayName = "";

  constructor(
    private tracksService: TracksService,
    private store: Store<{ tracks: { myRecentTracks: TrackList[] } }>,
    private http: HttpService,
    private endpointsService: ApiEndpointsService
  ) {
    this.tracks$ = this.store.select("tracks");
  }

  ngOnInit() {
    this.tracksService.initializeTrackType(
      this.tracksService.trackTypes.myRecentTracks
    );

    this.http
      .getApiRequest(this.endpointsService.getMyProfileUrl())
      .then(data => {
        this.userDisplayName = data.display_name;
      });
  }
}
