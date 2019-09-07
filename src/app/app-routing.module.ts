import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { LogoutGuardService } from "./admin/logout-guard.service";

const routes: Routes = [
  {
    path: "",
    component: WelcomeComponent
  },
  {
    path: "logout",
    canActivate: [LogoutGuardService],
    component: WelcomeComponent
  },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
