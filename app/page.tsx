"use client";

import React from "react";
import { Provider } from "react-redux";

import { store } from "@/app/store";
import { useAppSelector, useAppDispatch } from "@/app/hooks";
import { Input } from "@/app/ui/input";
import { SearchIcon } from "@/app/ui/icons";
import { searchChanged, selectOrdersBySearch } from "@/app/orders";

import { Header } from "./ui/header";
import { Sidebar } from "./ui/sidebar";
import {
  OrdersList,
  NewOrder,
  PreparingOrder,
  ReadyOrder,
  BaseOrder,
} from "./ui/orders";

export default function Home() {
  return (
    <Provider store={store}>
      <div className="flex">
        <Sidebar />
        <div className="w-full">
          <Header />
          <div className="px-[16px] py-[10px]">
            <Search />
          </div>
          <div className="flex gap-x-[16px] px-[16px] pt-[26px]">
            <NewOrdersList />
            <PreparingOrdersList />
            <ReadyOrdersList />
            <DeliveringOrdersList />
          </div>
        </div>
      </div>
    </Provider>
  );
}

const Search = () => {
  const search = useAppSelector((state) => state.orders.search);
  const dispatch = useAppDispatch();
  return (
    <Input
      value={search}
      wrapperClassName="w-[240px]"
      icon={<SearchIcon color="#0E73F6" />}
      placeholder="Поиск по ID"
      onChange={(ev) => dispatch(searchChanged({ value: ev.target.value }))}
    />
  );
};

const NewOrdersList = () => {
  const orders = useAppSelector(selectOrdersBySearch).filter(
    (order) => order.status === "new",
  );
  return (
    <OrdersList status="new" ordersAmount={orders.length}>
      {orders.map((order) => (
        <NewOrder key={order.id} order={order} />
      ))}
    </OrdersList>
  );
};

const comments = [""];

const PreparingOrdersList = () => {
  const orders = useAppSelector(selectOrdersBySearch).filter(
    (order) => order.status === "preparing",
  );
  return (
    <OrdersList status="preparing" ordersAmount={orders.length}>
      {orders.map((order) => (
        <PreparingOrder
          key={order.id}
          order={order}
          ready={order.id === 321550}
          comments={order.id === 321550 ? comments : undefined}
        />
      ))}
    </OrdersList>
  );
};

const ReadyOrdersList = () => {
  const orders = useAppSelector(selectOrdersBySearch).filter(
    (order) => order.status === "ready",
  );
  return (
    <OrdersList status="ready" ordersAmount={orders.length}>
      {orders.map((order) => (
        <ReadyOrder
          key={order.id}
          order={order}
          complete={order.id === 321556}
        />
      ))}
    </OrdersList>
  );
};

const DeliveringOrdersList = () => {
  const orders = useAppSelector(selectOrdersBySearch).filter(
    (order) => order.status === "delivering",
  );
  return (
    <OrdersList status="delivering" ordersAmount={orders.length}>
      {orders.map((order) => (
        <BaseOrder key={order.id} order={order} />
      ))}
    </OrdersList>
  );
};
