import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface GroupState {
  selected: string | null;
}

const initialState: GroupState = {
  selected: null,
};

const groupSlice = createSlice({
  name: "group",
  initialState,
  reducers: {
    setGroup: (state, action: PayloadAction<string>) => {
      state.selected = action.payload;
    },
  },
});

export const { setGroup } = groupSlice.actions;
export default groupSlice.reducer;
