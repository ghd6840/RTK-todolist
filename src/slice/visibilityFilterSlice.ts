import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from '../store/store';

export enum VisibilityFilter {
  ShowAll = "SHOW_ALL",
  ShowCompleted = "SHOW_COMPLETED",
  ShowActive = "SHOW_ACTIVE"
}

const initialState = VisibilityFilter.ShowAll;

export const visibilityFilterSlice = createSlice({
  name: "visibilityFilter",
  initialState,
  reducers: {
    setVisibilityFilter(state, action: PayloadAction<VisibilityFilter>) {
      return action.payload;
    }
  }
});

export const { setVisibilityFilter } = visibilityFilterSlice.actions;

export const selectVisibility = (state: RootState) => state.visibilityFilter;

export default visibilityFilterSlice.reducer;
