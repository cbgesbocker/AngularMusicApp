import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { of } from "rxjs";
import { Actions, ofType, Effect } from "@ngrx/effects";
import {
  switchMap,
  catchError,
  map,
  filter,
  withLatestFrom
} from "rxjs/operators";

import * as PlaylistActions from "./playlists.actions";
import { ApiEndpointsService } from "src/app/api-endpoints.service";
import { HttpService } from "src/app/http.service";
import { Playlist, PlaylistSet } from "../../playlist";

import * as PlaylistSelectors from "./playlists.selectors";

@Injectable()
export class PlaylistEffects {
  @Effect()
  populateCurrentPlaylists = this.actions$.pipe(
    ofType(PlaylistActions.POPULATE_PLAYLIST_SETS),
    withLatestFrom(this.store.select(PlaylistSelectors.getCurrentPlaylistSet)),
    filter(([action, currentSet]) => {
      debugger;
      return !currentSet;
    }),
    switchMap(() => {
      const myPlaylistEndpoint = this.endpointsService.getMyPlaylistsUrl();
      return (
        this.http
          // get api request
          .getApiRequestObservable(myPlaylistEndpoint, {
            params: {
              limit: 50
            }
          })
          .pipe(
            map((playlists: PlaylistSet) => {
              // return new action to set the data
              return new PlaylistActions.UpdatePlaylistSets({
                playlistSet: playlists,
                queryKey: "my-playlists"
              });
            }),
            catchError(err => {
              // always return observable
              return of();
            })
          )
      );
    })
  );

  @Effect()
  populatePlaylistSingle = this.actions$.pipe(
    ofType(PlaylistActions.POPULATE_PLAYLIST_SINGLE),
    withLatestFrom(this.store.select(PlaylistSelectors.getPlaylistSingle)),
    filter(([action, currentPlaylistSingle]) => {
      return !currentPlaylistSingle;
    }),
    switchMap(data => {
      debugger;
      return of();

      // const myPlaylistEndpoint = this.endpointsService.getPlaylistTracksUrl(
      //   data
      // );
      // return (
      //   this.http
      //     // get api request
      //     .getApiRequestObservable(myPlaylistEndpoint, {
      //       params: {
      //         limit: 50
      //       }
      //     })
      //     .pipe(
      //       map((playlists: PlaylistSet) => {
      //         // return new action to set the data
      //         return new PlaylistActions.UpdatePlaylistSets({
      //           playlistSet: playlists,
      //           queryKey: "my-playlists"
      //         });
      //       }),
      //       catchError(err => {
      //         // always return observable
      //         return of();
      //       })
      //     )
      // );
    })
  );

  constructor(
    private actions$: Actions,
    private endpointsService: ApiEndpointsService,
    private http: HttpService,
    private store: Store<{
      libraries: { playlists: { currentSet: Playlist[] } };
    }>
  ) {}
}
