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
    if (route.fragment && route.fragment.includes(tokenID)) {
      const token = route.fragment.split("=")[1];
      return token;
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
