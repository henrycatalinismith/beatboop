import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk, RootState } from "../../app/store";
import SC, { SoundcloudPlayer, SoundcloudTrack } from "../../soundcloud";

export type PlayerModes = "idle" | "play" | "pause";

interface PlayerState {
  mode: PlayerModes;
  track: SoundcloudTrack;
}

const initialState: PlayerState = {
  mode: "idle",
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
      state.mode = "play";
      state.track = action.payload;
    },

    pause: (state) => {
      state.mode = "pause";
    },
  },
});

export const { pause, play } = playerSlice.actions;

let player: SoundcloudPlayer;

export const playTrack = (track: SoundcloudTrack): AppThunk => async (
  dispatch
) => {
  dispatch(play(track));
  player = await SC.stream(`/tracks/${track.id}`);
  await player.play();
};

export const togglePlayback = (): AppThunk => async (dispatch, getState) => {
  const { mode, track } = getState().player;
  if (mode === "idle") {
    await dispatch(playTrack(track));
  } else if (mode === "play") {
    await dispatch(pause());
    await player.pause();
  } else if (mode === "pause") {
    await dispatch(play(track));
    await player.play();
  }
};

export const selectPlayerMode = (state: RootState) => state.player.mode;
export const selectPlayerTrack = (state: RootState) => state.player.track;

export default playerSlice.reducer;
