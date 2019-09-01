import { Component, Input } from "@angular/core";
import { TrackItem } from "../interface.track";

@Component({
  selector: "app-track-list",
  templateUrl: "./track-list.component.html",
  styleUrls: ["./track-list.component.scss"]
})
export class TrackListComponent {
  @Input() trackList: TrackItem[];

  getTrackImage(trackItem: TrackItem, imageNumber: number = 0): string {
    const imageArray = trackItem.track.album.images;
    return imageArray[imageNumber]["url"];
  }
}
