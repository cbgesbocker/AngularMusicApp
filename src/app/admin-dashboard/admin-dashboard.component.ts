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

  ngOnInit() {}

  toggleShowDiv() {
    this.animationState = this.animationState === "out" ? "in" : "out";
  }

  handlePlaylistSelection(playlist) {
    this.showPlaylistConfirmationDialog = true;
    this.playlistService.selectedPlaylist = playlist;
  }

  // getModalConfig() {
  //   return {
  //     open: this.showPlaylistConfirmationDialog,
  //     title:
  //       "Are you sure you would like to add " +
  //       this.trackService.selectedTracks.length +
  //       "tracks to " +
  //       this.playlistService.selectedPlaylist.name
  //   };
  // }
}
