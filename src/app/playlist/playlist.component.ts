import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-playlist",
  templateUrl: "./playlist.component.html",
  styleUrls: ["./playlist.component.scss"]
})
export class PlaylistComponent implements OnInit {
  @Input() playlist;

  constructor() {}

  ngOnInit() {}
}
