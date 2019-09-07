import { BrowserModule } from "@angular/platform-browser";

// Modules
import { MaterialModule } from "./material/material.module";
import { AppRoutingModule } from "./app-routing.module";
import { NgModule } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";

// Components
import { AppComponent } from "./app.component";
import { HeroComponent } from "./hero/hero.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { HeaderComponent } from "./header/header.component";
import { AdminDashboardComponent } from "./admin-dashboard/admin-dashboard.component";
import { LoggedOutComponent } from "./logged-out/logged-out.component";
import { PlaylistComponent } from "./playlist/playlist.component";
import { ModalComponent } from "./modal/modal.component";
import { StoreModule } from "@ngrx/store";
import * as appStore from "./store/store.reducer";
import { EffectsModule } from "@ngrx/effects";
import { PlaylistEffects } from "./playlists/store/playlists.effects";
import { PlaylistsComponent } from "./playlists/playlists.component";
import { LazyLoadImageDirective } from "./lazy-load-image.directive";
import { WelcomeComponent } from "./welcome/welcome.component";

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    PageNotFoundComponent,
    HeaderComponent,
    AdminDashboardComponent,
    LoggedOutComponent,
    PlaylistComponent,
    ModalComponent,
    DashboardLayoutComponent,
    PlaylistsComponent,
    LazyLoadImageDirective,
    WelcomeComponent
  ],
  imports: [
    MatToolbarModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    EffectsModule.forRoot([PlaylistEffects]),
    HttpClientModule,
    StoreModule.forRoot(appStore.appReducer)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
