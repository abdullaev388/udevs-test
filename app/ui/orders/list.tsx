import { clsx } from "clsx";
import React from "react";

import { OrderStatus } from "@/app/lib/orders";

export const OrdersList = ({
  status,
  ordersAmount,
  children,
}: {
  status: OrderStatus;
  ordersAmount: number;
  children: React.ReactNode;
}) => {
  const meta = statusMeta[status];
  return (
    <div className="w-[326px]">
      <div
        className={clsx(
          meta.bgColor,
          "rounded-tl-[4px] rounded-tr-[4px] p-[12px] text-[14px] font-bold uppercase leading-[24px] text-white",
        )}>
        {meta.name} ({ordersAmount})
      </div>
      <div className="flex flex-col gap-y-[8px] bg-[#EEF0F2] p-[8px]">
        {children}
      </div>
    </div>
  );
};

const statusMeta: { [Key in OrderStatus]: { bgColor: string; name: string } } =
  {
    new: { bgColor: "bg-primary-600", name: "Новый" },
    preparing: { bgColor: "bg-yellow-600", name: "Заготовка" },
    ready: { bgColor: "bg-green-600", name: "Готов" },
    delivering: { bgColor: "bg-teal-600", name: "Курьер в пути" },
  };
