// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { commonEnvironment } from "./environment.common";

const { apiConfig } = commonEnvironment;

// temp workaround
delete commonEnvironment.apiConfig;

export const environment = {
  production: false,
  ...commonEnvironment,
  apiConfig: {
    ...apiConfig,
    redirect_uri: "http://localhost:4200/admin/recently-played"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
