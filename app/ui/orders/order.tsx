import React from "react";
import Image from "next/image";

import {
  Order,
  OrderItem,
  OrderItemTopping,
  OrderShipping,
} from "@/app/lib/orders";
import { Button } from "@/app/ui/button";
import { DoneIcon, CloseIcon, CaretDownIcon } from "@/app/ui/icons";

export const NewOrder = React.memo(({ order }: { order: Order }) => {
  return (
    <BaseOrder order={order}>
      <div className="flex gap-x-[6px] p-[12px]">
        <Button className="w-full" appearance="secondary" color="red">
          <CloseIcon width={16} height={16} color="#F76659" />
          Отменить
        </Button>
        <Button className="w-full" appearance="primary" color="primary">
          <DoneIcon width={20} height={20} color="white" />
          Принять
        </Button>
      </div>
    </BaseOrder>
  );
});

export const PreparingOrder = React.memo(
  ({
    order,
    comments,
    ready,
  }: {
    order: Order;
    comments?: string[];
    ready?: boolean;
  }) => {
    return (
      <BaseOrder order={order}>
        <div className="flex flex-col gap-y-[20px] p-[12px]">
          {Boolean(comments) && (
            <div className="flex items-center justify-between">
              <div className="flex gap-x-[4px]">
                <div className="text-secondary-text text-[14px] font-normal leading-[21px]">
                  Комментарии({comments!.length})
                </div>
                <div className="bg-primary-600 flex items-center justify-center rounded-full px-[4px] text-[12px] text-white">
                  +3
                </div>
              </div>
              <CaretDownIcon color="#6E8BB7" />
            </div>
          )}
          {ready && (
            <Button className="w-full" appearance="secondary" color="primary">
              <DoneIcon width={20} height={20} color="#0E73F6" />
              Готово
            </Button>
          )}
        </div>
      </BaseOrder>
    );
  },
);

export const ReadyOrder = React.memo(
  ({ order, complete }: { order: Order; complete?: boolean }) => {
    return (
      <BaseOrder order={order}>
        <div className="flex gap-x-[6px] p-[12px]">
          {complete && (
            <Button className="w-full" appearance="secondary" color="primary">
              Завершить
            </Button>
          )}
        </div>
      </BaseOrder>
    );
  },
);

const numberFormat = Intl.NumberFormat();

export const BaseOrder = React.memo(
  ({ order, children }: { order: Order; children?: React.ReactNode }) => {
    const totalPrice = order.items.reduce(
      (total, item) => total + item.price,
      0,
    );
    const datetime = new Date(order.datetime);
    return (
      <div className="bg-white">
        <div className="flex justify-between p-[12px]">
          <div className="flex gap-x-[8px] text-[18px] font-bold leading-[24px]">
            <div>ID: {order.id}</div>
            <Image
              src="/icons/alert-circle.svg"
              alt="alert"
              height={16}
              width={16}
            />
          </div>
          <div className="flex gap-x-[8px]">
            <div className="text-secondary-text text-[12px] font-medium leading-[21px]">
              {numberFormat.format(totalPrice).replace(/,/g, " ")} сум
            </div>
            <Payment order={order} />
            {shippingIcons[order.shipping]}
          </div>
        </div>
        <div className="border-y-border-primary border-y border-solid p-[8px]">
          <div className="flex flex-col gap-y-[12px]">
            {order.items.map((item) => (
              <Item key={item.name} item={item} />
            ))}
          </div>
          <div className="mt-[12px] flex justify-end gap-x-[6px]">
            <Image src="/icons/watch.svg" alt="watch" height={16} width={16} />
            <div className="text-secondary-text text-[12px] font-medium leading-[16px]">
              {datetime.getHours()}:{datetime.getMinutes()}
            </div>
          </div>
        </div>
        {children}
      </div>
    );
  },
);

const Item = ({ item }: { item: OrderItem }) => {
  return (
    <div className="flex gap-x-[4px] text-[14px] font-medium leading-[21px]">
      <div>{item.amount} x</div>
      {item.toppings ? (
        <div>
          <div>{item.name}</div>
          {item.toppings.map((topping) => (
            <div
              key={topping}
              className="text-[12px] font-normal text-[#48535B]">
              {toppingNames[topping]}
            </div>
          ))}
        </div>
      ) : (
        <div>{item.name}</div>
      )}
    </div>
  );
};

const Payment = ({ order }: { order: Order }) => {
  if (order.payment === "cash") {
    return <Image src="/icons/cash.svg" alt="cash" height={16} width={16} />;
  }
  if (!order.paymentProvider) {
    return (
      <Image
        src="/icons/credit-card.svg"
        alt="credi-card"
        height={16}
        width={16}
      />
    );
  }
  return (
    <Image
      src={`/icons/${order.paymentProvider}.svg`}
      alt={order.paymentProvider}
      height={16}
      width={16}
    />
  );
};

const shippingIcons: { [Key in OrderShipping]: React.ReactNode } = {
  delivery: <Image src="/icons/car.svg" alt="car" height={16} width={16} />,
  pickup: <Image src="/icons/walk.svg" alt="pickup" height={16} width={16} />,
  "in-place": (
    <Image src="/icons/store.svg" alt="store" height={16} width={16} />
  ),
};

const toppingNames: { [Key in OrderItemTopping]: string } = {
  cheese: "С сыром",
  "no-onions": "Без лука",
};
