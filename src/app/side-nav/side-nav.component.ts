import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { User } from "../user";
import { Playlist } from "../libraries/playlist";
import { Observable } from "rxjs";
import { PlaylistsService } from "../libraries/playlists/playlists.service";
@Component({
  selector: "app-side-nav",
  templateUrl: "./side-nav.component.html",
  styleUrls: ["./side-nav.component.scss"]
})
export class SideNavComponent implements OnInit {
  private playlists$: Observable<Playlist[]>;

  constructor(private playlistsService: PlaylistsService) {}

  ngOnInit() {
    this.playlistsService.populateMyPlaylists();
    this.playlists$ = this.playlistsService.getFeatureStoreObservable(
      "currentSet"
    );
  }
}
