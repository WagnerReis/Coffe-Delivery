import { useContext } from "react";
import { CheckoutContext } from "../contexts/CheckoutContext";

export function useCheckout() {
  const context = useContext(CheckoutContext);

  return context;
}
