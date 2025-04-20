import { CardFlatContainer, Info, Details, Actions, Counter } from "./styles";
import { Minus, Plus, Trash } from "phosphor-react";

interface CardFlatProps {
  title: string;
  price: number;
  quantity: number;
  image: string;
}

export function CardFlat({ title, price, quantity, image }: CardFlatProps) {
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

            <div>
              <Trash size={22} weight="fill" />
              <p>REMOVER</p>
            </div>
          </Actions>
        </Details>
      </Info>
      <strong>R$ {price}</strong>
    </CardFlatContainer>
  );
}
