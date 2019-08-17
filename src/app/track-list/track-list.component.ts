import { Component, OnInit } from "@angular/core";
import { TracksService } from "../tracks.service";
import { TrackItem } from "../interface.track";

@Component({
  selector: "app-track-list",
  templateUrl: "./track-list.component.html",
  styleUrls: ["./track-list.component.scss"]
})
export class TrackListComponent implements OnInit {
  constructor(private trackService: TracksService) {
    this.trackService.initializeTrackList();
  }

  ngOnInit() {}
}
