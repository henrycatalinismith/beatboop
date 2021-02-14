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
      // Search results are subject to a tricky race condition when they're being fetched
      // live as the user types. If a search request dispatched by an earlier keystroke is
      // processed slower than a subsequent request, the user ends up seeing the results
      // of a different search than the current query they can see in the input field.
      // There are lots of ways to avoid this bug and this is the simplest: make the store
      // ignore all search results unless they're for the exact query currently in the
      // store.
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
};

export const selectSearchQuery = (state: RootState) => state.search.query;
export const selectSearchResults = (state: RootState) => state.search.results;

export default searchSlice.reducer;
