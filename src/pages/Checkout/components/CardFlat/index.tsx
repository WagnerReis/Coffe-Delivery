import { CardFlatContainer, Info, Details, Actions, Counter } from "./styles";
import expresso from "../../../../assets/coffee/expresso.svg";
import { Minus, Plus, Trash } from "phosphor-react";

export function CardFlat() {
  return (
    <CardFlatContainer>
      <Info>
        <img src={expresso} alt="" />

        <Details>
          <p>Expresso Tradicional</p>

          <Actions>
            <Counter>
              <button>
                <Minus size={14} weight="bold" />
              </button>
              <p>1</p>
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
      <strong>R$ 9,90</strong>
    </CardFlatContainer>
  );
}
