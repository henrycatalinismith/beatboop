import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import playerReducer from "../features/player/playerSlice";
import searchReducer from "../features/search/searchSlice";
import soundcloudReducer from "../features/soundcloud/soundcloudSlice";

export const store = configureStore({
  reducer: {
    player: playerReducer,
    search: searchReducer,
    soundcloud: soundcloudReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
