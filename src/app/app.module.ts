import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeroComponent } from "./hero/hero.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { MaterialModule } from "./material/material.module";
import { HeaderComponent } from "./header/header.component";

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    PageNotFoundComponent,
    HeaderComponent
  ],
  imports: [
    HttpClientModule,
    MatToolbarModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
