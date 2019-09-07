import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { MatToolbarModule } from "@angular/material/toolbar";
import { NgModule } from "@angular/core";

import { AdminModule } from "./admin/Admin.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { HeroComponent } from "./hero/hero.component";
import { LazyLoadImageDirective } from "./lazy-load-image.directive";
import { LibrariesModule } from "./libraries/libraries.module";
import { MaterialModule } from "./material/material.module";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { WelcomeComponent } from "./welcome/welcome.component";

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
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    LibrariesModule,
    MatToolbarModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
