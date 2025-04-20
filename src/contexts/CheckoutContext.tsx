import { createContext, ReactNode, useReducer } from "react";
import {
  addNewCoffeeToCartAction,
  createCheckoutAction,
  decreaseCoffeeAction,
  removeCoffeeAction,
  cleanCartAction,
} from "../reducers/checkout/actions";
import { checkoutReducer } from "../reducers/checkout/reducers";

export interface Address {
  cep: string;
  street: string;
  number: number;
  complement: string;
  district: string;
  city: string;
  state: string;
}

interface Coffee {
  id: string;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

export interface NewCheckoutFormData {
  orderId: string;
  coffees: Coffee[];
  address: Address;
  paymentMethod: "credit" | "debit" | "money";
}

interface CheckoutContextType {
  orderId: string;
  coffees: Coffee[];
  address: Address;
  paymentMethod: "credit" | "debit" | "money";
  createCheckout: (data: NewCheckoutFormData) => void;
  addNewCoffeeToCart: (coffee: Coffee) => void;
  decreaseCoffeeToCart: (coffeeId: string) => void;
  removeCoffeeToCart: (coffeeId: string) => void;
  cleanCart: () => void;
}

interface CheckoutContextProviderProps {
  children: ReactNode;
}

export const CheckoutContext = createContext({} as CheckoutContextType);

export function CheckoutContextProvider({
  children,
}: CheckoutContextProviderProps) {
  const [checkoutState, dispatch] = useReducer(checkoutReducer, {
    orderId: "",
    coffees: [],
    address: {
      cep: "",
      street: "",
      number: 0,
      complement: "",
      district: "",
      city: "",
      state: "",
    },
    paymentMethod: "credit",
  });

  const { coffees, orderId, address, paymentMethod } = checkoutState;

  function createCheckout(data: NewCheckoutFormData) {
    dispatch(createCheckoutAction(data));
  }

  function addNewCoffeeToCart(coffee: Coffee) {
    dispatch(addNewCoffeeToCartAction(coffee));
  }

  function decreaseCoffeeToCart(coffeeId: string) {
    dispatch(decreaseCoffeeAction(coffeeId));
  }

  function removeCoffeeToCart(coffeeId: string) {
    dispatch(removeCoffeeAction(coffeeId));
  }

  function cleanCart() {
    dispatch(cleanCartAction());
  }

  return (
    <CheckoutContext.Provider
      value={{
        orderId,
        coffees,
        address,
        paymentMethod,
        createCheckout,
        addNewCoffeeToCart,
        decreaseCoffeeToCart,
        removeCoffeeToCart,
        cleanCart,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
}
