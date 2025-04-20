import { createContext, ReactNode, useReducer } from "react";
import { addNewCoffeeToCartAction } from "../reducers/checkout/actions";
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
    console.log("Novo café adicionado ao carrinho!", coffee);
  }

  return (
    <CheckoutContext.Provider
      value={{ coffees, createNewOrder, addNewCoffeeToCart }}
    >
      {children}
    </CheckoutContext.Provider>
  );
}
