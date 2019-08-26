import { Component, OnInit, Input } from "@angular/core";
import { PlaylistsService } from "../playlists.service";

@Component({
  selector: "app-playlist",
  templateUrl: "./playlist.component.html",
  styleUrls: ["./playlist.component.scss"]
})
export class PlaylistComponent implements OnInit {
  @Input() playlist;
  @Input() activeClass = false;
  selected = false;
  constructor() {}

  ngOnInit() {}
}
