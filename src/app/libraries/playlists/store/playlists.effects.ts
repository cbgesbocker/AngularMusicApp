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
import { PlaylistCache } from "src/app/playlist-cache";

@Injectable()
export class PlaylistEffects {
  @Effect()
  populateCurrentPlaylists = this.actions$.pipe(
    ofType(PlaylistActions.POPULATE_PLAYLIST_SETS),
    withLatestFrom(this.store.select(PlaylistSelectors.getCurrentPlaylistSet)),
    filter(([action, currentSet]) => {
      // if we have a current set,
      // do not fetch from API
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
    withLatestFrom(this.store.select(PlaylistSelectors.getCachedPlaylists)),
    filter(
      ([action, cachedPlaylists]: [
        PlaylistActions.PopulatePlaylistSingle,
        PlaylistCache
      ]) => {
        const search = !cachedPlaylists.find(
          playlist => playlist.id !== action.payload
        );
        return search === undefined;
      }
    ),
    switchMap(
      ([action, cachedPlaylists]: [
        PlaylistActions.PopulatePlaylistSingle,
        PlaylistCache
      ]) => {
        const playlistEndpoint = this.endpointsService.getPlaylistTracksUrl(
          action.payload
        );
        return (
          this.http
            // get api request
            .getApiRequestObservable(playlistEndpoint)
            .pipe(
              map((playlist: Playlist) => {
                // return new action to set the data
                return new PlaylistActions.UpdatePlaylistSingle(playlist);
              }),
              catchError(err => {
                // always return observable
                return of();
              })
            )
        );
      }
    )
  );

  constructor(
    private actions$: Actions,
    private endpointsService: ApiEndpointsService,
    private http: HttpService,
    private store: Store<{
      libraries: {
        playlists: {
          cachedPlaylists: Playlist[];
          currentSet: Playlist[];
        };
      };
    }>
  ) {}
}
