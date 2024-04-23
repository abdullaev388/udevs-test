import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { Order, orders } from "@/app/lib/orders";
import { RootState } from "@/app/store";

const initialState = {
  orders,
  search: "",
};

export const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    searchChanged: (state, { payload }: PayloadAction<{ value: string }>) => {
      state.search = payload.value;
    },
    newOrderRejected: (state, { payload }: PayloadAction<{ order: Order }>) => {
      if (payload.order.status === "new") {
        state.orders = state.orders.filter(
          (order) => order.id !== payload.order.id,
        );
      }
    },
    newOrderAccepted: (state, { payload }: PayloadAction<{ order: Order }>) => {
      if (payload.order.status === "new") {
        state.orders = state.orders.filter(
          (order) => order.id !== payload.order.id,
        );
        state.orders.push({ ...payload.order, status: "preparing" });
      }
    },
    preparingOrderGotReady: (
      state,
      { payload }: PayloadAction<{ order: Order }>,
    ) => {
      if (payload.order.status === "preparing") {
        state.orders = state.orders.filter(
          (order) => order.id !== payload.order.id,
        );
        state.orders.push({ ...payload.order, status: "ready" });
      }
    },
    readyOrderCompleted: (
      state,
      { payload }: PayloadAction<{ order: Order }>,
    ) => {
      if (payload.order.status === "ready") {
        state.orders = state.orders.filter(
          (order) => order.id !== payload.order.id,
        );
        state.orders.push({ ...payload.order, status: "delivering" });
      }
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

export const {
  searchChanged,
  newOrderRejected,
  newOrderAccepted,
  preparingOrderGotReady,
  readyOrderCompleted,
} = ordersSlice.actions;
