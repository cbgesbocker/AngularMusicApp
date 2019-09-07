import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";

import { PlaylistsService } from "../playlists.service";
import { Playlist } from "src/app/libraries/playlist";
import * as PlaylistActions from "../store/playlists.actions";

@Component({
  selector: "app-playlist-set",
  templateUrl: "./playlist-set.component.html",
  styleUrls: ["./playlist-set.component.scss"]
})
export class PlaylistSetComponent implements OnInit, OnDestroy {
  private currentSet: Playlist[];
  private sub: Subscription;

  constructor(private playlistsService: PlaylistsService) {
    this.sub = this.playlistsService.store
      .select("libraries", "playlists", "currentSet")
      .subscribe((set: Playlist[]) => {
        this.currentSet = set;
      });
  }

  ngOnInit() {
    if (!this.currentSet) {
      this.playlistsService.populatePlaylistData(
        new PlaylistActions.PopulateMyPlaylists()
      );
    }
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
