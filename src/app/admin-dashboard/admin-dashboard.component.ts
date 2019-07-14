import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";
import { environment } from "src/environments/environment.prod";
import { Tracks } from "../tracks";
import { TracksService } from "../tracks.service";
@Component({
  selector: "app-admin-dashboard",
  templateUrl: "./admin-dashboard.component.html",
  styleUrls: ["./admin-dashboard.component.scss"]
  // providers: [HttpService]
})
export class AdminDashboardComponent implements OnInit {
  trackData: Tracks;
  playlistsData;

  constructor(private tracksService: TracksService) {}

  ngOnInit() {}
}
