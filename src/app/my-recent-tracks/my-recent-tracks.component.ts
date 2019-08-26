import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { TrackItem } from "../interface.track";
import { Observable } from "rxjs";
import { TracksService } from "../tracks.service";
import { TrackList } from "../interface.trackList";

@Component({
  selector: "app-my-recent-tracks",
  templateUrl: "./my-recent-tracks.component.html",
  styleUrls: ["./my-recent-tracks.component.scss"]
})
export class MyRecentTracksComponent implements OnInit {
  private tracks$: Observable<{ myRecentTracks: TrackList[] }>;

  constructor(
    private tracksService: TracksService,
    private store: Store<{ tracks: { myRecentTracks: TrackList[] } }>
  ) {
    this.tracks$ = this.store.select("tracks");
  }

  ngOnInit() {
    this.tracksService.initializeTrackType(
      this.tracksService.trackTypes.myRecentTracks
    );
  }
}
