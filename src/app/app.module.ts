import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { EffectsModule } from "@ngrx/effects";
import { HttpClientModule } from "@angular/common/http";
import { MatToolbarModule } from "@angular/material/toolbar";
import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";

import * as appStore from "./store/store.reducer";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { HeroComponent } from "./hero/hero.component";
import { LazyLoadImageDirective } from "./lazy-load-image.directive";
import { LoggedOutComponent } from "./logged-out/logged-out.component";
import { MaterialModule } from "./material/material.module";
import { ModalComponent } from "./modal/modal.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { PlaylistComponent } from "./playlist/playlist.component";
import { PlaylistEffects } from "./playlists/store/playlists.effects";
import { WelcomeComponent } from "./welcome/welcome.component";
import { PlaylistsComponent } from "./playlists/playlists.component";
import { AdminModule } from "./admin/Admin.module";

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    PageNotFoundComponent,
    HeaderComponent,
    LazyLoadImageDirective,
    WelcomeComponent
  ],
  imports: [
    AdminModule,
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
