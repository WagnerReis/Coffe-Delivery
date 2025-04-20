import { createContext, ReactNode, useReducer } from "react";
import {
  addNewCoffeeToCartAction,
  decreaseCoffeeAction,
  removeCoffeeAction,
} from "../reducers/checkout/actions";
import { checkoutReducer } from "../reducers/checkout/reducers";

interface Address {
  cep: string;
  street: string;
  number: string;
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

interface NewCheckoutFormData {
  orderId: string;
  coffees: Coffee[];
  address: Address;
  paymentMethod: "credit" | "debit" | "money";
}

interface CheckoutContextType {
  coffees: Coffee[];
  createNewOrder: (data: NewCheckoutFormData) => void;
  addNewCoffeeToCart: (coffee: Coffee) => void;
  decreaseCoffeeToCart: (coffeeId: string) => void;
  removeCoffeeToCart: (coffeeId: string) => void;
}

interface CheckoutContextProviderProps {
  children: ReactNode;
}

export const CheckoutContext = createContext({} as CheckoutContextType);

export function CheckoutContextProvider({
  children,
}: CheckoutContextProviderProps) {
  const [checkoutState, dispatch] = useReducer(checkoutReducer, {
    coffees: [],
  });

  const { coffees } = checkoutState;

  function createNewOrder(data: NewCheckoutFormData) {
    console.log("Pedido criado com sucesso!", data);
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

  return (
    <CheckoutContext.Provider
      value={{
        coffees,
        createNewOrder,
        addNewCoffeeToCart,
        decreaseCoffeeToCart,
        removeCoffeeToCart,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
}
