import { Component, Input } from "@angular/core";
import { Store } from "@ngrx/store";
import { Playlist } from "src/app/libraries/playlist";
import { EventEmitter } from "protractor";

@Component({
  selector: "app-playlist",
  templateUrl: "./playlist.component.html",
  styleUrls: ["./playlist.component.scss"]
})
export class PlaylistComponent {
  @Input() playlist: Playlist;
  @Input() activeClass = false;
  @Input() lazyLoadWaitTime = 100;
  @Input() selected = false;

  private menuOpen = false;

  constructor(private store: Store<any>) {}

  toggleMenu($e: Event) {
    $e.stopPropagation();
    this.menuOpen = !this.menuOpen;
  }
}
