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
}
