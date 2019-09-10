import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable, Subscription, ObservableLike } from "rxjs";

import { TracksService } from "../tracks.service";
import { TrackList } from "../../track-list";
import { HttpService } from "../../../http.service";
import { ApiEndpointsService } from "../../../api-endpoints.service";
import * as TrackActions from "../store/track-list.actions";
import { User } from "src/app/user";
import { UsersService } from "src/app/user/users.service";
import { TrackItem } from "../../track";

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
