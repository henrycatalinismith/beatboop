import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk, RootState } from "../../app/store";
import {
  SoundcloudTrack,
  streamSoundcloud,
} from "../../features/soundcloud/soundcloudSlice";

interface PlayerState {
  track: SoundcloudTrack;
}

const initialState: PlayerState = {
  track: {
    id: 140137930,
    title: "「Exclusive Coupé」",
    duration: 234940,
    artwork_url: "https://i1.sndcdn.com/artworks-000190668115-hzjyco-large.jpg",
    permalink_url: "https://soundcloud.com/myroneofficial/exclusive-coup",
    user: {
      username: "MYRONE",
      permalink_url: "https://soundcloud.com/myroneofficial",
    },
  },
};

export const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    play: (state, action: PayloadAction<SoundcloudTrack>) => {
      state.track = action.payload;
    },
  },
});

export const { play } = playerSlice.actions;

export const playTrack = (track: SoundcloudTrack): AppThunk => async (
  dispatch
) => {
  dispatch(play(track));
  dispatch(streamSoundcloud(track));
};

export const selectPlayerTrack = (state: RootState) => state.player.track;

export default playerSlice.reducer;
