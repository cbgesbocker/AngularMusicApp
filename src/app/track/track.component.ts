import { Component, OnInit, Input } from "@angular/core";
import { TrackmanagerService } from "../trackmanager.service";

@Component({
  selector: "app-track",
  templateUrl: "./track.component.html",
  styleUrls: ["./track.component.scss"]
})
export class TrackComponent implements OnInit {
  @Input() track;

  selected = false;

  constructor(private trackManager: TrackmanagerService) {}

  selectTrack() {
    this.selected = !this.selected;
  }

  ngOnInit() {}
}
