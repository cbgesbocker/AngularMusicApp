import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { EffectsModule } from "@ngrx/effects";
import { MobxAngularModule } from "mobx-angular";
import { StoreModule } from "@ngrx/store";

import { TrackComponent } from "./tracks/track/track.component";
import { TrackListComponent } from "./tracks/track-list/track-list.component";
import { TrackListEffects } from "./tracks/store/track-list.effects";
import { MyRecentTracksComponent } from "./tracks/my-recent-tracks/my-recent-tracks.component";
import { PlaylistSetComponent } from "./playlists/playlist-set/playlist-set.component";
import { PlaylistComponent } from "./playlists/playlist/playlist.component";
import { PlaylistEffects } from "./playlists/store/playlists.effects";

import * as fromLibraries from "./libraries.reducer";
import { GlobalModule } from "../global/global.module";
import { RouterModule } from "@angular/router";
import { PlaylistInfoComponent } from "../playlist-info/playlist-info.component";
import { AdminDashboardComponent } from "../admin/admin-dashboard/admin-dashboard.component";
import { DashboardLayoutComponent } from "../admin/dashboard-layout/dashboard-layout.component";
import { SideNavComponent } from "../side-nav/side-nav.component";

@NgModule({
  declarations: [
    PlaylistComponent,
    PlaylistSetComponent,
    TrackComponent,
    TrackListComponent,
    MyRecentTracksComponent,
    AdminDashboardComponent,
    PlaylistInfoComponent,
    DashboardLayoutComponent
  ],
  imports: [
    GlobalModule,
    CommonModule,
    HttpClientModule,
    MobxAngularModule,
    RouterModule.forChild([]),
    EffectsModule.forFeature([TrackListEffects, PlaylistEffects]),
    StoreModule.forFeature("libraries", fromLibraries.reducer)
  ],
  exports: [AdminDashboardComponent, DashboardLayoutComponent]
})
export class LibrariesModule {}
