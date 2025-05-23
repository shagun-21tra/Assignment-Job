import { createSlice } from "@reduxjs/toolkit";

const itemsSlice = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      state.push(action.payload);
    },
    removeItem: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    editItem: (state, action) => {
      const { id, name, cost } = action.payload;
      const index = state.findIndex((item) => item.id === id);
      if (index !== -1) {
        state[index] = { id, name, cost };
      }
    },
  },
});

export const { addItem, removeItem, editItem } = itemsSlice.actions;
export default itemsSlice.reducer;