import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeroComponent } from "./hero/hero.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { MaterialModule } from "./material/material.module";
import { HeaderComponent } from "./header/header.component";
import { AdminDashboardComponent } from "./admin-dashboard/admin-dashboard.component";
import { LoggedOutComponent } from "./logged-out/logged-out.component";
import { TrackComponent } from "./track/track.component";
import { PlaylistComponent } from "./playlist/playlist.component";
import { ModalComponent } from "./modal/modal.component";
import { TrackListComponent } from "./track-list/track-list.component";
import { StoreModule } from "@ngrx/store";
import * as appStore from "./store/store.reducer";
import { MyRecentTracksComponent } from "./my-recent-tracks/my-recent-tracks.component";
import { MyPlaylistsComponent } from "./my-playlists/my-playlists.component";
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    PageNotFoundComponent,
    HeaderComponent,
    AdminDashboardComponent,
    LoggedOutComponent,
    TrackComponent,
    PlaylistComponent,
    ModalComponent,
    TrackListComponent,
    MyRecentTracksComponent,
    MyPlaylistsComponent,
    DashboardLayoutComponent
  ],
  imports: [
    MatToolbarModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    StoreModule.forRoot(appStore.appReducer)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
