import { createSlice } from "@reduxjs/toolkit";

const costsSlice = createSlice({
  name: "costs",
  initialState: [],
  reducers: {
    addCost: (state, action) => {
      state.push(action.payload);
    },
    removeCost: (state, action) => {
      return state.filter((cost) => cost.id !== action.payload);
    },
    editCost: (state, action) => {
      const { id, description, amount } = action.payload;
      const index = state.findIndex((cost) => cost.id === id);
      if (index !== -1) {
        state[index] = { id, description, amount };
      }
    },
  },
});

export const { addCost, removeCost, editCost } = costsSlice.actions;
export default costsSlice.reducer;