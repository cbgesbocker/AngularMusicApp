import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";
import { Routes, RouterModule } from "@angular/router";

import * as fromAdmin from "./store/admin.reducer";
import { AdminDashboardComponent } from "./admin-dashboard/admin-dashboard.component";
import { AuthGuardService } from "./auth-guard.service";
import { DashboardLayoutComponent } from "./dashboard-layout/dashboard-layout.component";
import { libraryRoutes } from "../libraries/libraries-routing.module";
import { LoggedOutComponent } from "../logged-out/logged-out.component";
import { LogoutGuardService } from "./logout-guard.service";

const routes: Routes = [
  {
    path: "admin",
    canActivate: [AuthGuardService],
    component: AdminDashboardComponent,
    children: libraryRoutes
  },
  {
    path: "logout",
    component: LoggedOutComponent,
    canActivate: [LogoutGuardService]
  }
];

@NgModule({
  declarations: [DashboardLayoutComponent, AdminDashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature("admin", fromAdmin.reducer)
  ]
})
export class AdminModule {}
