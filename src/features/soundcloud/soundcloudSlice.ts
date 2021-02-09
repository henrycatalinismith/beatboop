import { createSlice } from "@reduxjs/toolkit";
import { AppThunk } from "../../app/store";

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

interface SoundcloudPlayer {
  play(): void;
  pause(): void;
}

interface SoundcloudApi {
  initialize: (options: InitializeOptions) => void;
  get: TrackSearch;
  stream: (path: string) => Promise<SoundcloudPlayer>;
}

declare var SC: SoundcloudApi;

interface SoundcloudState {}

const initialState: SoundcloudState = {};

let player: SoundcloudPlayer;

export const soundcloudSlice = createSlice({
  name: "soundcloud",
  initialState,
  reducers: {
    // query: (state, action: PayloadAction<string>) => {
    // state.query = action.payload;
    // },
  },
});

// export const { query } = soundcloudSlice.actions;

export const initSoundcloud = (key: string): AppThunk => (dispatch) => {
  SC.initialize({
    client_id: key,
  });
};

export const searchSoundcloud = (
  q: string
): AppThunk<Promise<SoundcloudTrack[]>> => async (
  dispatch
): Promise<SoundcloudTrack[]> => {
  // return new Promise((resolve, reject) => {
  return SC.get("/tracks", { q });
};

export const streamSoundcloud = (track: SoundcloudTrack): AppThunk => async (
  dispatch
) => {
  player = await SC.stream(`/tracks/${track.id}`);
  await player.play();
};

// export const selectSearchQuery = (state: RootState) => state.search.query;

export default soundcloudSlice.reducer;
