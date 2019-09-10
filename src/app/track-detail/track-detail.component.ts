import { Component, Input } from "@angular/core";
import { TrackItem } from "../libraries/track";
@Component({
  selector: "app-track-detail",
  templateUrl: "./track-detail.component.html",
  styleUrls: ["./track-detail.component.scss"]
})
export class TrackDetailComponent {
  @Input() trackItem: TrackItem;
  trackImage: string;

  constructor() {}
}
