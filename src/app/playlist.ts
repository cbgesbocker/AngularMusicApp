import { Image } from "./image";
import { User } from "./user";
import { ExternalUrl } from "./external-url";
import { TrackItem } from "./interface.track";

export interface Playlist {
  collaborative: boolean;
  external_urls: ExternalUrl;
  href: string;
  id: string;
  images: Image[];
  name: string;
  owner: User;
  public: boolean | null;
  snapshot_id: string;
  tracks: TrackItem[];
}

export interface PlaylistSet {
  href: string;
  items: Playlist[];
  limit: number;
  next: any;
  offset: number;
  previous: any;
  total: number;
}
