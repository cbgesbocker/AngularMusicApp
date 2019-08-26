import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { AuthGuardService } from "./auth-guard.service";
import { AdminDashboardComponent } from "./admin-dashboard/admin-dashboard.component";
import { LoggedOutComponent } from "./logged-out/logged-out.component";
import { MyRecentTracksComponent } from "./my-recent-tracks/my-recent-tracks.component";
import { MyPlaylistsComponent } from "./my-playlists/my-playlists.component";

const routes: Routes = [
  { path: "", component: LoggedOutComponent },
  {
    path: "admin",
    canActivate: [AuthGuardService],
    component: AdminDashboardComponent,
    children: [
      {
        path: "recently-played",
        component: MyRecentTracksComponent
      },
      {
        path: "playlists",
        component: MyPlaylistsComponent
      }
    ]
  },
  {
    path: "logout",
    component: LoggedOutComponent
  },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
