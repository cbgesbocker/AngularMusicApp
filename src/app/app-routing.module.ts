import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HeroComponent } from "./hero/hero.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { AuthGuardService } from './auth-guard.service';

const routes: Routes = [
  { path: "", component: HeroComponent },
  { path: "auth", canActivate: [AuthGuardService], component: HeroComponent },
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
