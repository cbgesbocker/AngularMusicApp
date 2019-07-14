import { Injectable, OnInit } from "@angular/core";
import { HttpService } from "./http.service";
import { environment } from "src/environments/environment";
import { Tracks } from "./tracks";

@Injectable({
  providedIn: "root"
})
export class TracksService implements OnInit {
  myTracksEndpoint = environment.apiConfig.endpoints.tracks;
  trackData;

  constructor(private httpClient: HttpService) {}

  ngOnInit() {
    this.httpClient
      .getApiRequestSet(this.myTracksEndpoint, {
        params: {
          limit: 50
        }
      })
      .subscribe((data: Tracks) => {
        this.trackData = data;
      });
  }
}
