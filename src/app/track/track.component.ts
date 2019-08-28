import { Component, Input, OnInit } from "@angular/core";
import { TracksService } from "../tracks.service";
import { TrackItem } from "../interface.track";

@Component({
  selector: "app-track",
  templateUrl: "./track.component.html",
  styleUrls: ["./track.component.scss"]
})
export class TrackComponent implements OnInit {
  @Input() track: TrackItem;
  @Input() selected: boolean;
  @Input() class: string;

  private trackImageUrl: string = "";

  constructor(private tracksService: TracksService) {}

  toggleSelected() {
    this.selected = !this.selected;
    this.tracksService.toggleSelectedTrack(this.track, this.selected);
  }

  ngOnInit() {
    this.trackImageUrl = TrackComponent.getTrackImage(this.track);
  }

  static getTrackImage(trackItem: TrackItem, imageNumber: number = 0): string {
    const imageArray = trackItem.track.album.images;
    debugger;

    if (imageArray.length - 1 <= imageNumber) {
      return imageArray[imageNumber];
    } else {
      return "";
    }
  }
}
