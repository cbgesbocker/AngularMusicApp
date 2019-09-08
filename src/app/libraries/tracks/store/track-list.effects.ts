import { Injectable } from "@angular/core";
import { Actions, ofType, Effect } from "@ngrx/effects";
import {
  switchMap,
  catchError,
  map,
  withLatestFrom,
  filter
} from "rxjs/operators";
import { of } from "rxjs";

import { ApiEndpointsService } from "src/app/api-endpoints.service";
import { HttpService } from "src/app/http.service";
import * as TrackActions from "./track-list.actions";
import { createSelector, Store } from "@ngrx/store";
import { UserState } from "src/app/user/store/user.reducer";
import { User } from "src/app/user";
import { AppState } from "src/app/app-state";
import { TrackItem } from "../../track";

const getMyRecentTracks = (state: AppState): TrackItem[] | undefined => {
  return state.libraries.tracks.myRecentTracks;
};

@Injectable()
export class TrackListEffects {
  @Effect()
  populateMyTracks = this.actions$.pipe(
    ofType(TrackActions.FETCH_MY_TRACKS),
    withLatestFrom(this.store.select(getMyRecentTracks)),
    filter(([action, myRecentTracks]) => {
      debugger;
      return !myRecentTracks;
    }),
    switchMap(() => {
      debugger;
      const myTracksUrl = this.endpointsService.getMyTracksUrl();
      return this.http.getApiRequestObservable(myTracksUrl).pipe(
        map(trackList => {
          return new TrackActions.SetTracks(trackList);
        }),
        catchError(err => {
          return of();
        })
      );
    })
  );

  constructor(
    private actions$: Actions,
    private endpointsService: ApiEndpointsService,
    private http: HttpService,
    private store: Store<{ users: { userSignedIn: User } }>
  ) {}
}
