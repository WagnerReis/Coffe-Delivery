import { useCheckout } from "../../../../hooks/useCheckout";
import { Coffee } from "../../../../reducers/checkout/reducers";
import { CardFlatContainer, Info, Details, Actions, Counter } from "./styles";
import { Minus, Plus, Trash } from "phosphor-react";

interface CardFlatProps {
  coffee: Coffee;
}

export function CardFlat({ coffee }: CardFlatProps) {
  const { addNewCoffeeToCart, decreaseCoffeeToCart, removeCoffeeToCart } =
    useCheckout();

  function handleRemoveCoffee() {
    removeCoffeeToCart(coffee.id);
  }

  function handleAddCoffee() {
    addNewCoffeeToCart(coffee);
  }

  function handleDecreaseCoffee() {
    decreaseCoffeeToCart(coffee.id);
  }

  return (
    <CardFlatContainer>
      <Info>
        <img src={coffee.image} alt="" />

        <Details>
          <p>{coffee.title}</p>

          <Actions>
            <Counter>
              <button onClick={handleDecreaseCoffee} type="button">
                <Minus size={14} weight="bold" />
              </button>
              <p>{coffee.quantity}</p>
              <button onClick={handleAddCoffee} type="button">
                <Plus size={14} weight="bold" />
              </button>
            </Counter>

            <button onClick={handleRemoveCoffee} type="button">
              <Trash size={22} weight="fill" />
              <p>REMOVER</p>
            </button>
          </Actions>
        </Details>
      </Info>
      <strong>R$ {coffee.price}</strong>
    </CardFlatContainer>
  );
}
