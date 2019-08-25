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
    const fragment = route.fragment;
    if (fragment && fragment.includes(tokenID)) {
      const value = fragment.slice(fragment.indexOf(tokenID)).split("=")[1];
      debugger;
      return value;
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

  /**
   * @param url
   * @param params
   */
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
}
