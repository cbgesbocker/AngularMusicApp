import * as AuthActions from "./auth.actions";

const initialState = {
  authToken: ""
};

export function authReducer(state = initialState, action: AuthActions.SetAuth) {
  switch (action.type) {
    case AuthActions.SET_AUTH_TOKEN:
      return {
        ...state,
        authToken: action.payload
      };
    default:
      break;
  }
}
