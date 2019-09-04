import { Component, Input, ChangeDetectionStrategy } from "@angular/core";
import { computed } from "mobx-angular";

import { TracksService } from "../tracks.service";
import { TrackItem } from "../interface.track";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "app-track",
  templateUrl: "./track.component.html",
  styleUrls: ["./track.component.scss"]
})
export class TrackComponent {
  @Input() trackItem: TrackItem;
  @Input() selected: boolean = false;
  @Input() class: string;
  @Input() imageNumber: number = 1;

  constructor(private tracksService: TracksService) {}

  @computed get imageUrl() {
    return this.trackItem.track.album.images[this.imageNumber].url;
  }

  @computed get backgroundStyle() {
    return `url(${this.imageUrl})`;
  }

  toggleTrackSelection() {
    this.selected = !this.selected;
    this.tracksService.updateTrackList(this.trackItem, this.selected);
  }
}
