import { Routes } from "@angular/router";
import { MyRecentTracksComponent } from "./tracks/my-recent-tracks/my-recent-tracks.component";
import { PlaylistSetComponent } from "./playlists/playlist-set/playlist-set.component";
import { PlaylistInfoComponent } from "../playlist-info/playlist-info.component";
import { WelcomeDashboardComponent } from "../welcome-dashboard/welcome-dashboard.component";
import { PlaylistDashboardComponent } from "../playlist-dashboard/playlist-dashboard.component";

export const libraryRoutes: Routes = [
  {
    path: "",
    component: WelcomeDashboardComponent
  },
  {
    path: "recently-played",
    component: MyRecentTracksComponent
  },
  {
    path: "playlists",
    component: PlaylistDashboardComponent,
    children: [
      {
        path: "",
        component: PlaylistSetComponent
      },
      {
        path: ":id",
        component: PlaylistInfoComponent
      }
    ]
  }
];
