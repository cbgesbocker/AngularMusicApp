import { environment } from "src/environments/environment";

export const authorizeEndpointUrlParams = [
  {
    key: "scope",
    value: encodeURIComponent(environment.apiConfig.scope)
  },
  {
    key: "redirect_uri",
    value: environment.apiConfig.redirect_uri
  },
  {
    key: "client_id",
    value: encodeURIComponent(environment.apiConfig.client_id)
  },
  {
    key: "client_secret",
    value: encodeURIComponent(environment.apiConfig.client_secret)
  },
  {
    key: "response_type",
    value: encodeURIComponent(environment.apiConfig.response_type)
  }
];
