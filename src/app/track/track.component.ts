import { Component, Input, OnInit } from "@angular/core";
import { TracksService } from "../tracks.service";
import { TrackItem } from "../interface.track";
import { Observable } from "rxjs";

import { of } from "rxjs";

@Component({
  selector: "app-track",
  templateUrl: "./track.component.html",
  styleUrls: ["./track.component.scss"]
})
export class TrackComponent {
  @Input() track: TrackItem;
  @Input() selected: boolean;
  @Input() class: string;
  @Input() imageUrl: string;
  private trackImageUrl: Observable<string>;

  constructor(private tracksService: TracksService) {}

  toggleSelected() {
    this.selected = !this.selected;
    this.tracksService.toggleSelectedTrack(this.track, this.selected);
  }
}
