import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { Actions, ofType, Effect } from "@ngrx/effects";
import { switchMap, catchError, map } from "rxjs/operators";
import { ApiEndpointsService } from "src/app/api-endpoints.service";
import { HttpService } from "src/app/http.service";
import { User } from "src/app/user";

import * as UserActions from "./user.actions";
@Injectable()
export class UserEffects {
  @Effect()
  populateUserData = this.actions$.pipe(
    ofType(UserActions.POPULATE_USER_DATA),
    switchMap(() => {
      const myProfileEndpoint = this.endpointsService.getMyProfileUrl();
      return (
        this.http
          // get api request
          .getApiRequestObservable(myProfileEndpoint)
          .pipe(
            map((user: User) => {
              // return new action to set the data
              return new UserActions.SetUserData(user);
            }),
            catchError(err => {
              // always return observable
              return of();
            })
          )
      );
    })
  );

  constructor(
    private actions$: Actions,
    private endpointsService: ApiEndpointsService,
    private http: HttpService
  ) {}
}
