import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MyRecentTracksComponent } from "./my-recent-tracks/my-recent-tracks.component";
import { PlaylistsComponent } from "../playlists/playlists.component";

const routes: Routes = [
  {
    path: "recently-played",
    component: MyRecentTracksComponent
  },
  {
    path: "playlists",
    component: PlaylistsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrackRoutingModule {}
