import { Component, Input } from "@angular/core";
import { Store } from "@ngrx/store";
import { Playlist } from "src/app/libraries/playlist";

@Component({
  selector: "app-playlist",
  templateUrl: "./playlist.component.html",
  styleUrls: ["./playlist.component.scss"]
})
export class PlaylistComponent {
  @Input() playlist: Playlist;
  @Input() activeClass = false;
  @Input() lazyLoadWaitTime = 100;

  selected = false;

  constructor(private store: Store<any>) {}
}
