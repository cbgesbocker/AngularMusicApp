import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MyRecentTracksComponent } from "./tracks/my-recent-tracks/my-recent-tracks.component";
import { PlaylistSetComponent } from "./playlists/playlist-set/playlist-set.component";

export const libraryRoutes: Routes = [
  {
    path: "recently-played",
    component: MyRecentTracksComponent
  },
  {
    path: "playlists",
    component: PlaylistSetComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(libraryRoutes)]
})
export class TrackRoutingModule {}
