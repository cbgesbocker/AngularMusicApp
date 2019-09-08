import { Component, OnInit } from "@angular/core";
import { PlaylistsService } from "../libraries/playlists/playlists.service";
import { ActivatedRouteSnapshot } from "@angular/router";

@Component({
  selector: "app-playlist-info",
  templateUrl: "./playlist-info.component.html",
  styleUrls: ["./playlist-info.component.scss"]
})
export class PlaylistInfoComponent implements OnInit {
  constructor(
    private playlistService: PlaylistsService,
    private route: ActivatedRouteSnapshot
  ) {
    debugger;
  }

  ngOnInit() {
    let id = this.route.params.id;
    debugger;
    // if (id) {
    //   this.playlistService.
    // }
  }
}
