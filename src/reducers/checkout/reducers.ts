import { ActionTypes } from "./actions";
import { produce } from "immer";
import { v4 as uuidV4 } from "uuid";
import { Address, NewCheckoutFormData } from "../../contexts/CheckoutContext";

export interface Coffee {
  id: string;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

interface ActionProps {
  type: string;
  payload: {
    coffee?: Coffee;
    coffeeId?: string;
    data?: NewCheckoutFormData;
  };
}

interface CheckoutState {
  orderId: string;
  coffees: Coffee[];
  address: Address;
  paymentMethod: "credit" | "debit" | "money";
}

export function checkoutReducer(state: CheckoutState, action: ActionProps) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_COFFEE: {
      const coffee = action.payload.coffee;

      if (!coffee) return state;

      return produce(state, (draft) => {
        const coffeeExistsIndex = draft.coffees.findIndex(
          (item) => item.id === coffee.id,
        );
        if (coffeeExistsIndex >= 0) {
          draft.coffees[coffeeExistsIndex].quantity += 1;
        } else {
          draft.coffees.push({ ...coffee, quantity: 1 });
          draft.orderId = uuidV4();
        }
      });
    }
    case ActionTypes.DECREASE_COFFEE: {
      const coffeeId = action.payload?.coffeeId;

      if (!coffeeId) return state;

      return produce(state, (draft) => {
        const coffeeExists = draft.coffees.find((item) => item.id === coffeeId);

        if (!coffeeExists) return state;

        if (coffeeExists.quantity > 1) {
          coffeeExists.quantity -= 1;
        } else if (coffeeExists.quantity === 1) {
          draft.coffees = draft.coffees.filter(
            (coffee) => coffee.id !== coffeeId,
          );
        }
      });
    }
    case ActionTypes.REMOVE_COFFEE: {
      const coffeeId = action.payload?.coffeeId;

      if (!coffeeId) return state;

      return produce(state, (draft) => {
        draft.coffees = draft.coffees.filter((item) => item.id !== coffeeId);
      });
    }
    case ActionTypes.CREATE_CHECKOUT: {
      const data = action.payload.data;

      if (!data) return state;

      return produce(state, (draft) => {
        draft.orderId = uuidV4();
        draft.coffees = data.coffees;
        draft.address = data.address;
        draft.paymentMethod = data.paymentMethod;
      });
    }
    default:
      return state;
  }
}
