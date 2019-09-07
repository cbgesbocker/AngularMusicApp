import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

import { TrackComponent } from "./track/track.component";
import { TrackListComponent } from "./track-list/track-list.component";
import { TrackListEffects } from "./track-list/store/track-list.effects";
import { EffectsModule } from "@ngrx/effects";
import { MobxAngularModule } from "mobx-angular";
import { MyRecentTracksComponent } from "./my-recent-tracks/my-recent-tracks.component";
import { TrackRoutingModule } from "./tracks-routing.module";

@NgModule({
  declarations: [TrackComponent, TrackListComponent, MyRecentTracksComponent],
  imports: [
    TrackRoutingModule,
    CommonModule,
    HttpClientModule,
    MobxAngularModule,
    EffectsModule.forRoot([TrackListEffects])
  ]
})
export class TracksModule {}
