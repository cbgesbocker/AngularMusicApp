import * as AuthActions from "./auth.actions";

export interface State {
  authToken: string;
  clientState: string;
  isLoggedIn: boolean;
  isValidState: boolean;
}

const initialState = {
  authToken: "",
  clientState: "",
  isLoggedIn: false,
  isValidState: false
};

export function authReducer(
  state = initialState,
  action: AuthActions.AuthActions
) {
  switch (action.type) {
    case AuthActions.SET_AUTH_TOKEN:
      return {
        ...state,
        authToken: action.payload
      };
    case AuthActions.SET_CLIENT_STATE:
      return {
        ...state,
        clientState: action.payload
      };
    case AuthActions.SET_STATE_VALIDITY:
      return {
        ...state,
        isValidState: action.payload
      };
    default:
      return state;
  }
}
