import {
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectionStrategy
} from "@angular/core";

import { PlaylistsService } from "../libraries/playlists/playlists.service";
import { ActivatedRoute } from "@angular/router";
import { Observable, Subscription } from "rxjs";
import { Playlist } from "../libraries/playlist";

@Component({
  selector: "app-playlist-info",
  templateUrl: "./playlist-info.component.html",
  styleUrls: ["./playlist-info.component.scss"]
})
export class PlaylistInfoComponent implements OnInit, OnDestroy {
  private playlist$: Observable<Playlist>;
  private playlist: Playlist;
  private sub: Subscription;

  constructor(
    private playlistService: PlaylistsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: { id: string }) => {
      this.playlistService.populatePlaylistSingle(params.id);
    });
    this.playlist$ = this.playlistService.getFeatureStoreObservable(
      "currentPlaylistSingle"
    );

    this.sub = this.playlist$.subscribe((playlist: Playlist) => {
      this.playlist = playlist;
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
