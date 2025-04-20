import { createContext, ReactNode } from "react";

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
  createNewOrder: (data: NewCheckoutFormData) => void;
}

interface CheckoutContextProviderProps {
  children: ReactNode;
}

export const CheckoutContext = createContext({} as CheckoutContextType);

export function CheckoutContextProvider({
  children,
}: CheckoutContextProviderProps) {
  function createNewOrder(data: NewCheckoutFormData) {
    console.log("Pedido criado com sucesso!", data);
  }

  return (
    <CheckoutContext.Provider value={{ createNewOrder }}>
      {children}
    </CheckoutContext.Provider>
  );
}
