import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk, RootState } from "../../app/store";
import {
  SoundcloudTrack,
  searchSoundcloud,
} from "../../features/soundcloud/soundcloudSlice";

interface SearchState {
  query: string;
  results: SoundcloudTrack[];
}

const initialState: SearchState = {
  query: "",
  results: [],
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    query: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },

    results: (state, action: PayloadAction<SoundcloudTrack[]>) => {
      state.results = action.payload;
    },
  },
});

export const { query, results } = searchSlice.actions;

export const search = (q: string): AppThunk => async (dispatch) => {
  dispatch(query(q));
  const result = await dispatch(searchSoundcloud(q));
  dispatch(results(result));
  console.log(result);
};

export const selectSearchQuery = (state: RootState) => state.search.query;
export const selectSearchResults = (state: RootState) => state.search.results;

export default searchSlice.reducer;
