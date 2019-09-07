import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { MatToolbarModule } from "@angular/material/toolbar";
import { NgModule } from "@angular/core";

import { AdminModule } from "./admin/admin.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { HeroComponent } from "./hero/hero.component";
import { MaterialModule } from "./material/material.module";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { GlobalModule } from "./global/global.module";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    PageNotFoundComponent,
    HeaderComponent,
    WelcomeComponent
  ],
  imports: [
    EffectsModule.forRoot([]),
    StoreModule.forRoot({}),
    GlobalModule,
    AdminModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    MatToolbarModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
