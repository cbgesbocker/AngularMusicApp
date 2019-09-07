import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { AuthGuardService } from "./auth-guard.service";
import { AdminDashboardComponent } from "./admin-dashboard/admin-dashboard.component";
import { LoggedOutComponent } from "./logged-out/logged-out.component";
import { MyRecentTracksComponent } from "./tracks/my-recent-tracks/my-recent-tracks.component";
import { PlaylistsComponent } from "./playlists/playlists.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { LogoutGuardService } from "./logout-guard.service";
const routes: Routes = [
  {
    path: "",
    component: WelcomeComponent
  },
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
        component: PlaylistsComponent
      }
    ]
  },
  {
    path: "logout",
    component: LoggedOutComponent,
    canActivate: [LogoutGuardService]
  },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
