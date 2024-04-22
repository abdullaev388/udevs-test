export type OrderStatus = "new" | "preparing" | "ready" | "delivering";

export type OrderPayment = "cash" | "card";

export type OrderPaymentProvider = "click" | "payme" | "apelsin" | null;

export type OrderShipping = "delivery" | "pickup" | "in-place";

export interface Order {
  id: number;
  status: OrderStatus;
  payment: OrderPayment;
  paymentProvider: OrderPaymentProvider;
  shipping: OrderShipping;
  datetime: string;
  items: OrderItem[];
}

export type OrderItemTopping = "cheese" | "no-onions";

export interface OrderItem {
  name: string;
  amount: number;
  price: number;
  toppings: OrderItemTopping[] | null;
}

const datetime = "2024-04-23 15:22";

const pepsi: OrderItem = {
  name: "Пепси 0,5",
  amount: 3,
  price: 6000,
  toppings: null,
};

const hamburger: OrderItem = {
  name: "Гамбургер",
  amount: 1,
  price: 25000,
  toppings: ["cheese", "no-onions"],
};

const spicyLavash: OrderItem = {
  name: "Лаваш мясной Standart острый",
  amount: 2,
  price: 32000,
  toppings: null,
};

const doubleBurger: OrderItem = {
  name: "Дабл Бургер",
  amount: 1,
  price: 35000,
  toppings: ["cheese", "no-onions"],
};

const bigHamburger: OrderItem = {
  name: "Big Gamburger",
  amount: 1,
  price: 40000,
  toppings: ["cheese", "no-onions"],
};

let count = 321544;

const getId = () => {
  count++;
  return count;
};

export const orders: Order[] = [
  {
    id: getId(),
    status: "new",
    payment: "card",
    paymentProvider: "payme",
    shipping: "in-place",
    datetime,
    items: [pepsi, hamburger, spicyLavash],
  },
  {
    id: getId(),
    status: "new",
    payment: "card",
    paymentProvider: "apelsin",
    shipping: "in-place",
    datetime,
    items: [pepsi, hamburger, spicyLavash],
  },
  {
    id: getId(),
    status: "new",
    payment: "card",
    paymentProvider: null,
    shipping: "in-place",
    datetime,
    items: [pepsi, hamburger, spicyLavash],
  },
  {
    id: getId(),
    status: "new",
    payment: "cash",
    paymentProvider: null,
    shipping: "pickup",
    datetime,
    items: [bigHamburger, pepsi, spicyLavash, doubleBurger],
  },
  {
    id: getId(),
    status: "new",
    payment: "card",
    paymentProvider: "click",
    shipping: "in-place",
    datetime,
    items: [pepsi, hamburger, spicyLavash],
  },
  {
    id: getId(),
    status: "preparing",
    payment: "card",
    paymentProvider: null,
    shipping: "in-place",
    datetime,
    items: [hamburger],
  },
  {
    id: getId(),
    status: "preparing",
    payment: "card",
    paymentProvider: null,
    shipping: "in-place",
    datetime,
    items: [bigHamburger, pepsi, spicyLavash],
  },
  {
    id: getId(),
    status: "preparing",
    payment: "card",
    paymentProvider: null,
    shipping: "delivery",
    datetime,
    items: [hamburger],
  },
  {
    id: getId(),
    status: "ready",
    payment: "cash",
    paymentProvider: null,
    shipping: "pickup",
    datetime,
    items: [spicyLavash],
  },
  {
    id: getId(),
    status: "ready",
    payment: "cash",
    paymentProvider: null,
    shipping: "in-place",
    datetime,
    items: [bigHamburger, pepsi, spicyLavash, doubleBurger],
  },
  {
    id: getId(),
    status: "ready",
    payment: "cash",
    paymentProvider: null,
    shipping: "in-place",
    datetime,
    items: [spicyLavash],
  },
  {
    id: getId(),
    status: "ready",
    payment: "cash",
    paymentProvider: null,
    shipping: "pickup",
    datetime,
    items: [spicyLavash],
  },
  {
    id: getId(),
    status: "delivering",
    payment: "card",
    paymentProvider: null,
    shipping: "pickup",
    datetime,
    items: [bigHamburger, pepsi, spicyLavash, doubleBurger],
  },
];
