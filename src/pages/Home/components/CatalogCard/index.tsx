import { Minus, Plus, ShoppingCart } from "phosphor-react";
import expresso from "../../../../assets/coffee/expresso.svg";

import { CardContainer, Tag, Presentation, Buy, Cart } from "./styles";

export function CatalogCard() {
  return (
    <CardContainer>
      <img src={expresso} alt="" />

      <Tag>
        <p>TRADICIONAL</p>
        <p>TRADICIONAL</p>
      </Tag>

      <Presentation>
        <h3>Expresso Tradicional</h3>
        <p>O tradicional café feito com água quente e grãos moídos</p>
      </Presentation>

      <Buy>
        <p>R$</p>
        <strong> 9,90</strong>

        <div>
          <button>
            <Minus size={32} weight="bold" />
          </button>
          <p>1</p>
          <button>
            <Plus size={32} weight="bold" />
          </button>
        </div>

        <Cart>
          <ShoppingCart size={22} weight="fill" />
        </Cart>
      </Buy>
    </CardContainer>
  );
}
