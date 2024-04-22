import React from "react";

import { Header } from "./ui/header";
import { Sidebar } from "./ui/sidebar";
import {
  OrdersList,
  NewOrder,
  PreparingOrder,
  ReadyOrder,
  BaseOrder,
} from "./ui/orders";

import { orders } from "./lib/orders";

export default function Home() {
  const newOrders = orders.filter((order) => order.status === "new");
  const preparingOrders = orders.filter(
    (order) => order.status === "preparing",
  );
  const readyOrders = orders.filter((order) => order.status === "ready");
  const deliveringOrders = orders.filter(
    (order) => order.status === "delivering",
  );
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full">
        <Header />
        <div className="flex gap-x-[16px] px-[16px] pt-[26px]">
          <OrdersList status="new" ordersAmount={newOrders.length}>
            {newOrders.map((order) => (
              <NewOrder key={order.id} order={order} />
            ))}
          </OrdersList>
          <OrdersList status="preparing" ordersAmount={preparingOrders.length}>
            {preparingOrders.map((order, index) => (
              <PreparingOrder
                key={order.id}
                order={order}
                ready={index === 0}
                comments={index === 0 ? [""] : undefined}
              />
            ))}
          </OrdersList>
          <OrdersList status="ready" ordersAmount={readyOrders.length}>
            {readyOrders.map((order, index) => (
              <ReadyOrder
                key={order.id}
                order={order}
                complete={index === readyOrders.length - 1}
              />
            ))}
          </OrdersList>
          <OrdersList
            status="delivering"
            ordersAmount={deliveringOrders.length}>
            {deliveringOrders.map((order) => (
              <BaseOrder key={order.id} order={order} />
            ))}
          </OrdersList>
        </div>
      </div>
    </div>
  );
}
