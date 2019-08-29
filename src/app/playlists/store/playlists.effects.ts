import { Actions, ofType, Effect } from "@ngrx/effects";
import { switchMap, catchError, map } from "rxjs/operators";
import * as PlaylistActions from "./playlists.actions";
import { ApiEndpointsService } from "src/app/api-endpoints.service";
import { HttpService } from "src/app/http.service";
import { Injectable } from "@angular/core";
import { of } from "rxjs";

@Injectable()
export class PlaylistEffects {
  @Effect()
  populateCurrentPlaylists = this.actions$.pipe(
    ofType(PlaylistActions.POPULATE_PLAYLIST_SETS),
    switchMap((playlistData: PlaylistActions.PopulateMyPlaylists) => {
      debugger;
      const myPlaylistEndpoint = this.endpointsService.getMyPlaylistsUrl();
      return this.http
        .getApiRequestObservable(myPlaylistEndpoint, {
          params: {
            limit: 50
          }
        })
        .pipe(
          map(resData => {
            debugger;
            return new PlaylistActions.UpdatePlaylistSets({
              playlistSet: resData,
              queryKey: "my-playlists"
            });
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
