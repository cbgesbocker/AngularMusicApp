import { Injectable } from "@angular/core";
import { Actions, ofType, Effect } from "@ngrx/effects";
import { switchMap, catchError, map } from "rxjs/operators";
import { of } from "rxjs";

import { ApiEndpointsService } from "src/app/api-endpoints.service";
import { HttpService } from "src/app/http.service";
import * as TrackActions from "./track-list.actions";

@Injectable()
export class TrackListEffects {
  @Effect()
  populateMyTracks = this.actions$.pipe(
    ofType(TrackActions.FETCH_MY_TRACKS),
    switchMap(() => {
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
    private http: HttpService
  ) {}
}
