import { commonEnvironment } from "./environment.common";

export const environment = {
  production: true,
  apiConfig: {
    ...commonEnvironment.apiConfig,
    redirect_uri: ""
  }
};
