import { Routes } from "@angular/router";
import { MyRecentTracksComponent } from "./tracks/my-recent-tracks/my-recent-tracks.component";
import { PlaylistSetComponent } from "./playlists/playlist-set/playlist-set.component";
import { LoggedOutComponent } from "../logged-out/logged-out.component";
import { LogoutGuardService } from "../admin/logout-guard.service";

export const libraryRoutes: Routes = [
  {
    path: "recently-played",
    component: MyRecentTracksComponent
  },
  {
    path: "playlists",
    component: PlaylistSetComponent
  },
  {
    path: "logout",
    component: LoggedOutComponent,
    canActivate: [LogoutGuardService]
  }
];
