import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk, RootState } from "../../app/store";
import SC, { SoundcloudTrack } from "../../soundcloud"

export interface SearchState {
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

    results: (state, action: PayloadAction<{ query: string, tracks: SoundcloudTrack[] }>) => {
      if (action.payload.query === state.query) {
        state.results = action.payload.tracks;
      }
    },
  },
});

export const { query, results } = searchSlice.actions;

export const search = (q: string): AppThunk => async (dispatch) => {
  dispatch(query(q));
  const result = await SC.get("/tracks", { q });
  dispatch(results({ query: q, tracks: result }));
  console.log(result);
};

export const selectSearchQuery = (state: RootState) => state.search.query;
export const selectSearchResults = (state: RootState) => state.search.results;

export default searchSlice.reducer;
