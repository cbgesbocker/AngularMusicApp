import { Component, Input, ChangeDetectionStrategy } from "@angular/core";
import { TrackItem } from "../libraries/track";
@Component({
  selector: "app-track-detail",
  templateUrl: "./track-detail.component.html",
  styleUrls: ["./track-detail.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TrackDetailComponent {
  @Input() trackItem: TrackItem;
  trackImage: string;

  constructor() {}
}
