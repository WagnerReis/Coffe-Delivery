import { Coffee } from "../reducers/checkout/reducers";

export function calcTotalItens(coffees: Coffee[]) {
  return coffees.reduce((acc, curr) => {
    return acc + curr.price * curr.quantity;
  }, 0);
}
