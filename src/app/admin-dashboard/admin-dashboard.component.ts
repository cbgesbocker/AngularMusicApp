import { Component, OnInit } from "@angular/core";

import { TracksService } from "../tracks.service";
import { SlideInOutAnimation } from "../animations";
import { PlaylistsService } from "../playlists.service";
@Component({
  selector: "app-admin-dashboard",
  templateUrl: "./admin-dashboard.component.html",
  styleUrls: ["./admin-dashboard.component.scss"],
  animations: [SlideInOutAnimation]
})
export class AdminDashboardComponent implements OnInit {
  constructor(
    private playlistService: PlaylistsService,
    private trackService: TracksService
  ) {}

  showPlaylistConfirmationDialog = false;
  animationState = "out";

  ngOnInit() {
    this.trackService.initializeTrackList();
  }

  toggleShowDiv(): void {
    this.animationState = this.animationState === "out" ? "in" : "out";
  }

  handlePlaylistSelection(playlist): void {
    this.showPlaylistConfirmationDialog = true;
    this.playlistService.selectedPlaylist = playlist;
  }
}
