import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

import { TracksService } from "../tracks.service";
import { TrackList } from "../../track-list";
import { User } from "src/app/user";

@Component({
  selector: "app-my-recent-tracks",
  templateUrl: "./my-recent-tracks.component.html",
  styleUrls: ["./my-recent-tracks.component.scss"]
})
export class MyRecentTracksComponent implements OnInit {
  private trackList$: Observable<TrackList[]>;
  private user$: Observable<User>;

  constructor(private tracksService: TracksService) {}

  ngOnInit() {
    this.tracksService.fetchMyRecentTracks();
    this.trackList$ = this.tracksService.getFeatureStoreObservable(
      "myRecentTracks"
    );
  }
}
