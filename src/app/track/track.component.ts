import { Component, OnInit, Input } from "@angular/core";
import { TracksService } from "../tracks.service";

@Component({
  selector: "app-track",
  templateUrl: "./track.component.html",
  styleUrls: ["./track.component.scss"]
})
export class TrackComponent {
  @Input() track;
  selected = false;

  constructor(private tracksService: TracksService) {}

  selectTrack(): void {
    this.selected = !this.selected;
    this.tracksService.addTrack(this.track);
  }
}
