import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk, RootState } from "../../app/store";

interface SearchState {
  query: string;
}

const initialState: SearchState = {
  query: "",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    query: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
  },
});

export const { query } = searchSlice.actions;

export const search = (q: string): AppThunk => (dispatch) => {
  dispatch(query(q));
};

export const selectSearchQuery = (state: RootState) => state.search.query;

export default searchSlice.reducer;
