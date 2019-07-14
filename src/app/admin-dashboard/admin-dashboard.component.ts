import { Component, OnInit } from "@angular/core";

import { TracksService } from "../tracks.service";
import { SlideInOutAnimation } from "../animations";
@Component({
  selector: "app-admin-dashboard",
  templateUrl: "./admin-dashboard.component.html",
  styleUrls: ["./admin-dashboard.component.scss"],
  animations: [SlideInOutAnimation]
  // providers: [HttpService]
})
export class AdminDashboardComponent implements OnInit {
  constructor(private tracksService: TracksService) {}
  ngOnInit() {}

  animationState = "out";

  toggleShowDiv() {
    this.animationState = this.animationState === "out" ? "in" : "out";
  }
}
