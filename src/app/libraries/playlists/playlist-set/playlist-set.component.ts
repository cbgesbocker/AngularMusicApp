import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription, Observable } from "rxjs";

import { PlaylistsService } from "../playlists.service";
import { Playlist } from "src/app/libraries/playlist";

@Component({
  selector: "app-playlist-set",
  templateUrl: "./playlist-set.component.html",
  styleUrls: ["./playlist-set.component.scss"]
})
export class PlaylistSetComponent implements OnInit {
  private playlists$: Observable<Playlist[]>;

  constructor(private playlistsService: PlaylistsService) {}

  ngOnInit() {
    this.playlistsService.populateMyPlaylists();
    this.playlists$ = this.playlistsService.getFeatureStoreObservable(
      "currentSet"
    );
  }
}
