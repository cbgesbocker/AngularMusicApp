import { Component, Input } from "@angular/core";
import { TracksService } from "../tracks.service";
import { TrackItem } from "../interface.track";

@Component({
  selector: "app-track",
  templateUrl: "./track.component.html",
  styleUrls: ["./track.component.scss"]
})
export class TrackComponent {
  @Input() track: TrackItem;
  @Input() selected: boolean;
  @Input() class: string;

  constructor(private tracksService: TracksService) {}
}
