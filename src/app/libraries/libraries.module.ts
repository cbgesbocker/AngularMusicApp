import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { EffectsModule } from "@ngrx/effects";
import { MobxAngularModule } from "mobx-angular";

import { TrackComponent } from "./tracks/track/track.component";
import { TrackListComponent } from "./tracks/track-list/track-list.component";
import { TrackListEffects } from "./tracks/track-list/store/track-list.effects";
import { MyRecentTracksComponent } from "./tracks/my-recent-tracks/my-recent-tracks.component";
import { TrackRoutingModule } from "./libraries-routing.module";
import { PlaylistEffects } from "../playlists/store/playlists.effects";
import { StoreModule } from "@ngrx/store";
import * as fromLibraries from "./libraries.reducer";

@NgModule({
  declarations: [TrackComponent, TrackListComponent, MyRecentTracksComponent],
  imports: [
    TrackRoutingModule,
    CommonModule,
    HttpClientModule,
    MobxAngularModule,
    EffectsModule.forRoot([TrackListEffects, PlaylistEffects]),
    StoreModule.forFeature("libraries", fromLibraries.reducer)
  ]
})
export class Libraries {}
