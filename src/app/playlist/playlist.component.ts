import { Component, Input } from "@angular/core";
import { Store } from "@ngrx/store";

@Component({
  selector: "app-playlist",
  templateUrl: "./playlist.component.html",
  styleUrls: ["./playlist.component.scss"]
})
export class PlaylistComponent {
  @Input() playlist;
  @Input() activeClass = false;
  selected = false;
  constructor(private store: Store<any>) {}
}
