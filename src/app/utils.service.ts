import { ActivatedRouteSnapshot } from "@angular/router";

export default class UtilsService {
  static getAccessTokenFromRouteFragment(
    route: ActivatedRouteSnapshot,
    tokenID: string
  ): string {
    if (route.fragment && route.fragment.includes(tokenID)) {
      const token = route.fragment.split("=")[1];
      return token;
    }
    return "";
  }
}
