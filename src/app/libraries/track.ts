export interface TrackItem {
  added_at: string;
  track: Track;
}

interface Track {
  album: any;
  artists: Array<string>;
  available_markets: Array<string>;
  disc_number: number;
  duration_ms: number;
  explicit: false;
  external_ids: object;
  external_urls: object;
  href: string;
  id: string;
  is_local: boolean;
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
}
