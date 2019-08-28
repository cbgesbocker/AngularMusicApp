import * as AuthActions from "./auth.actions";

export interface State {
  accessToken: string;
  clientState: string;
  isValidState: boolean;
}

const initialState = {
  accessToken: "",
  clientState: "",
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
        accessToken: action.payload
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
