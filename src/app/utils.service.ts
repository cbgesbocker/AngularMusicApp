import { ActivatedRouteSnapshot } from "@angular/router";

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

  static getGeneratdRandomString(length: number = 50) {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
}
