import * as AuthActions from "./auth.actions";

const initialState = {
  authToken: "",
  clientState: "",
  isValidState: false
};

export function authReducer(state = initialState, action: any) {
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
