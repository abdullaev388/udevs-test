import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { orders } from "@/app/lib/orders";

const initialState = {
  orders,
  search: "",
};

export const ordersSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    searchChanged: (state, payload: PayloadAction<{ value: string }>) => {
      state.search = payload.payload.value;
    },
  },
});

export const { searchChanged } = ordersSlice.actions;
