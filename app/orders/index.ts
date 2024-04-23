import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { orders } from "@/app/lib/orders";
import { RootState } from "@/app/store";

const initialState = {
  orders,
  search: "",
};

export const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    searchChanged: (state, payload: PayloadAction<{ value: string }>) => {
      state.search = payload.payload.value;
    },
  },
});

export const selectOrdersBySearch = (state: RootState) => {
  if (!state.orders.search) {
    return state.orders.orders;
  }
  return state.orders.orders.filter((order) =>
    order.id.toString().includes(state.orders.search),
  );
};

export const { searchChanged } = ordersSlice.actions;
