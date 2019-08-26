import { Component, OnInit } from "@angular/core";

import { TracksService } from "../tracks.service";
import { SlideInOutAnimation } from "../animations";
import { PlaylistsService } from "../playlists.service";
import { HttpService } from "../http.service";
import { ApiEndpointsService } from "../api-endpoints.service";
@Component({
  selector: "app-admin-dashboard",
  templateUrl: "./admin-dashboard.component.html",
  styleUrls: ["./admin-dashboard.component.scss"],
  animations: [SlideInOutAnimation]
})
export class AdminDashboardComponent implements OnInit {
  private userDisplayName = "";
  constructor(
    private playlistService: PlaylistsService,
    private trackService: TracksService,
    private http: HttpService,
    private endpointsService: ApiEndpointsService
  ) {}

  showPlaylistConfirmationDialog = false;
  animationState = "out";

  ngOnInit() {
    this.http
      .getApiRequest(this.endpointsService.getMyProfileUrl())
      .then(data => {
        this.userDisplayName = data.display_name;
      });
  }

  toggleShowDiv(): void {
    this.animationState = this.animationState === "out" ? "in" : "out";
  }

  handlePlaylistSelection(playlist): void {
    this.showPlaylistConfirmationDialog = true;
    this.playlistService.selectedPlaylist = playlist;
  }
}
