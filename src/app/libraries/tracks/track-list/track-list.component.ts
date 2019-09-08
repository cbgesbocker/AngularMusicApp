import {
  Component,
  Input,
  OnDestroy
} from "@angular/core";

import { TracksService } from "../tracks.service";
import { TrackItem } from "../../track";

@Component({
  selector: "app-track-list",
  templateUrl: "./track-list.component.html",
  styleUrls: ["./track-list.component.scss"]
})
export class TrackListComponent implements OnDestroy {
  @Input() trackList: TrackItem[];

  constructor(private tracksService: TracksService) {}

  ngOnDestroy() {
    this.tracksService.selectedTrackItems = [];
  }
}
