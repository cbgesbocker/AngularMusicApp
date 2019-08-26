import { ExternalUrl } from "./external-url";
import { Followers } from "./followers";
import { Image } from "./image";

export interface User {
  display_name: string;
  external_urls: ExternalUrl;
  followers: Followers;
  href: string;
  id: string;
  images: Image[];
  type: string;
  uri: string;
}
