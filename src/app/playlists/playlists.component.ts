import {
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectionStrategy
} from "@angular/core";
import { PlaylistsService } from "../playlists.service";
import * as PlaylistActions from "./store/playlists.actions";
import { Playlist } from "../playlist";
import { Subscription } from "rxjs";
import { computed } from "mobx-angular";

@Component({
  selector: "app-playlists",
  templateUrl: "./playlists.component.html",
  styleUrls: ["./playlists.component.scss"]
})
export class PlaylistsComponent implements OnInit, OnDestroy {
  private currentSet: Playlist[];
  private sub: Subscription;

  constructor(private playlistsService: PlaylistsService) {
    this.sub = this.playlistsService.store
      .select("playlists", "currentSet")
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
