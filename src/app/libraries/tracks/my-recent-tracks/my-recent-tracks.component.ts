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

@Component({
  selector: "app-my-recent-tracks",
  templateUrl: "./my-recent-tracks.component.html",
  styleUrls: ["./my-recent-tracks.component.scss"]
})
export class MyRecentTracksComponent implements OnInit {
  private trackList: TrackList[];
  private user$: Observable<User>;

  constructor(
    private tracksService: TracksService,
    private store: Store<{
      tracks: { myRecentTracks: TrackList[] };
    }>,
    private http: HttpService,
    private endpointsService: ApiEndpointsService,
    private usersService: UsersService
  ) {
    this.store
      .select("libraries", "tracks", "myRecentTracks")
      .subscribe((list: TrackList[]) => {
        this.trackList = list;
      });
    this.usersService.fetchMyProfile();
    this.user$ = this.usersService.currentUser$;
  }

  ngOnInit() {
    if (!this.trackList) {
      this.tracksService.initializeTrackType(new TrackActions.FetchTracks());
    }
  }
}
