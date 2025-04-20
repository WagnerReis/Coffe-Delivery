import { Coffee } from "./reducers";

export enum ActionTypes {
  ADD_NEW_COFFEE = "ADD_NEW_COFFEE",
  DECREASE_COFFEE = "DECREASE_COFFEE",
  REMOVE_COFFEE = "REMOVE_COFFEE",
}

export function addNewCoffeeToCartAction(coffee: Coffee) {
  return {
    type: ActionTypes.ADD_NEW_COFFEE,
    payload: {
      coffee,
    },
  };
}

export function decreaseCoffeeAction(coffeeId: string) {
  return {
    type: ActionTypes.DECREASE_COFFEE,
    payload: {
      coffeeId,
    },
  };
}

export function removeCoffeeAction(coffeeId: string) {
  return {
    type: ActionTypes.REMOVE_COFFEE,
    payload: {
      coffeeId,
    },
  };
}
