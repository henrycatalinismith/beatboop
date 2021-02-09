export interface SoundcloudTrack {
  id: number;
  title: string;
  duration: number;
  artwork_url: string;
  permalink_url: string;
  user: {
    username: string;
    permalink_url: string;
  };
}

interface InitializeOptions {
  client_id: string;
}

interface TrackSearchOptions {
  q: string;
}

type TrackSearch = (
  path: "/tracks",
  options: TrackSearchOptions
) => Promise<SoundcloudTrack[]>;

export interface SoundcloudPlayer {
  play(): void;
  pause(): void;
}

export interface SoundcloudApi {
  initialize: (options: InitializeOptions) => void;
  get: TrackSearch;
  stream: (path: string) => Promise<SoundcloudPlayer>;
}

declare var SC: SoundcloudApi;

export default SC as SoundcloudApi;
