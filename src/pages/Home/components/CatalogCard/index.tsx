import { Minus, Plus, ShoppingCart } from "phosphor-react";

import { CardContainer, Tag, Presentation, Buy, Cart } from "./styles";

interface Coffee {
  id: number;
  title: string;
  description: string;
  tags: string[];
  price: number;
  image: string;
  quantity: number;
}

interface CatalogCardProps {
  coffee: Coffee;
}

export function CatalogCard({ coffee }: CatalogCardProps) {
  return (
    <CardContainer>
      <img src={coffee.image} alt="" />

      <Tag>
        {coffee.tags.map((tag) => {
          return <p key={tag}>{tag}</p>;
        })}
      </Tag>
      <Presentation>
        <h3>{coffee.title}</h3>
        <p>{coffee.description}</p>
      </Presentation>

      <Buy>
        <p>R$</p>
        <strong> {coffee.price.toFixed(2)}</strong>

        <div>
          <button>
            <Minus size={32} weight="bold" />
          </button>
          <p>{coffee.quantity}</p>
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
