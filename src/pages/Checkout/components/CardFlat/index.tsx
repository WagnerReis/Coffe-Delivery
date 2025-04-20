import { useCheckout } from "../../../../hooks/useCheckout";
import { CardFlatContainer, Info, Details, Actions, Counter } from "./styles";
import { Minus, Plus, Trash } from "phosphor-react";

interface CardFlatProps {
  id: string;
  title: string;
  price: number;
  quantity: number;
  image: string;
}

export function CardFlat({ id, title, price, quantity, image }: CardFlatProps) {
  const { removeCoffeeToCart } = useCheckout();

  function handleRemoveCoffee() {
    removeCoffeeToCart(id);
  }

  return (
    <CardFlatContainer>
      <Info>
        <img src={image} alt="" />

        <Details>
          <p>{title}</p>

          <Actions>
            <Counter>
              <button>
                <Minus size={14} weight="bold" />
              </button>
              <p>{quantity}</p>
              <button>
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
      <strong>R$ {price}</strong>
    </CardFlatContainer>
  );
}
