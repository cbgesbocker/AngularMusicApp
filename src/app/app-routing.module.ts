import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HeroComponent } from "./hero/hero.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { AuthGuardService } from "./auth-guard.service";
import { AdminDashboardComponent } from "./admin-dashboard/admin-dashboard.component";
import { LoggedOutComponent } from "./logged-out/logged-out.component";

const routes: Routes = [
  { path: "", component: LoggedOutComponent },
  {
    path: "admin",
    canActivate: [AuthGuardService],
    component: AdminDashboardComponent
  },
  {
    path: "logout",
    component: LoggedOutComponent
  },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
