import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";
import { Routes, RouterModule } from "@angular/router";

import * as fromAdmin from "./store/admin.reducer";
import { AdminDashboardComponent } from "./admin-dashboard/admin-dashboard.component";
import { AuthGuardService } from "./auth-guard.service";
import { DashboardLayoutComponent } from "./dashboard-layout/dashboard-layout.component";
import { libraryRoutes } from "../libraries/library-routes";
import { LibrariesModule } from "../libraries/libraries.module";
import { GlobalModule } from "../global/global.module";
import { HttpClientModule } from "@angular/common/http";
import { EffectsModule } from "@ngrx/effects";
import { UserModule } from "../user/user.module";
import { SideNavComponent } from "../side-nav/side-nav.component";

const routes: Routes = [
  {
    path: "admin",
    canActivate: [AuthGuardService],
    component: AdminDashboardComponent,
    children: libraryRoutes
  }
];

@NgModule({
  declarations: [
    SideNavComponent,
    DashboardLayoutComponent,
    AdminDashboardComponent
  ],
  imports: [
    GlobalModule,
    HttpClientModule,
    CommonModule,
    LibrariesModule,
    UserModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature("admin", fromAdmin.reducer)
  ]
})
export class AdminModule {}
