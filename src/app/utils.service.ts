import { ActivatedRouteSnapshot } from "@angular/router";

/**
 * @class
 * @UtilsService
 *
 * Functional helpers
 */
export default class UtilsService {
  static getFragmentVar({
    route,
    tokenID
  }: {
    route: ActivatedRouteSnapshot;
    tokenID: string;
  }): string {
    const fragmentPieces = route.fragment && route.fragment.split("&");
    if (fragmentPieces) {
      for (let key in fragmentPieces) {
        const fragmentKeyVal = fragmentPieces[key].split("=");
        if (fragmentKeyVal.indexOf(tokenID) !== -1) {
          return fragmentKeyVal[1];
        }
      }
    }
    return "";
  }

  static getGeneratedRandomString(length: number = 50) {
    let result = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  static buildUrl(
    url: URL,
    params: Array<{ key: string; value: string }>
  ): URL {
    for (var key in params) {
      const config = params[key];
      url.searchParams.set(config.key, config.value);
    }
    return url;
  }

  static redirectTo(href: string): void {
    window.location.replace(href);
  }
}
