import { Component, OnInit } from "@angular/core";
import { PlaylistsService } from "../playlists.service";

@Component({
  selector: "app-my-playlists",
  templateUrl: "./my-playlists.component.html",
  styleUrls: ["./my-playlists.component.scss"]
})
export class MyPlaylistsComponent implements OnInit {
  constructor(private playlistsService: PlaylistsService) {}

  ngOnInit() {}
}
