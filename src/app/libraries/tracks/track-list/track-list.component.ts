import { Component, Input, ChangeDetectionStrategy } from "@angular/core";

import { TracksService } from "../../../tracks.service";
import { computed } from "mobx-angular";
import { TrackItem } from "../../../interface.track";

@Component({
  selector: "app-track-list",
  templateUrl: "./track-list.component.html",
  styleUrls: ["./track-list.component.scss"]
})
export class TrackListComponent {
  @Input() trackList: TrackItem[];

  constructor(private tracksService: TracksService) {}
}
