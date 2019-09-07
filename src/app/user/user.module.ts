import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { userReducer } from "./store/user.reducer";
import { UserEffects } from "./store/user.effects";

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature("users", userReducer),
    CommonModule,
    EffectsModule.forFeature([UserEffects])
  ]
})
export class UserModule {}
