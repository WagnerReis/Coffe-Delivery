import { Minus, Plus, ShoppingCart } from "phosphor-react";

import { CardContainer, Tag, Presentation, Buy, Cart } from "./styles";
import { useCheckout } from "../../../../hooks/useCheckout";
import { NavLink } from "react-router-dom";

interface Coffee {
  id: string;
  title: string;
  description: string;
  tags: string[];
  price: number;
  image: string;
  quantity: number;
}

interface CatalogCardProps {
  coffee: Coffee;
  onDecrementeCoffee: (coffeeId: string) => void;
  onIncrementCoffee: (coffeeId: string) => void;
}

export function CatalogCard({
  coffee,
  onDecrementeCoffee,
  onIncrementCoffee,
}: CatalogCardProps) {
  const { addNewCoffeeToCart, decreaseCoffeeToCart, coffees } = useCheckout();

  function handleAddNewCoffeeToCart(data: Coffee) {
    addNewCoffeeToCart(data);
  }

  function handleDecreaseCoffeeToCart(coffeeId: string) {
    decreaseCoffeeToCart(coffeeId);
  }

  function handleNavigateToCart() {
    const coffeeAlreadyInCart = coffees.find((item) => item.id === coffee.id);

    if (!coffeeAlreadyInCart) {
      handleAddNewCoffeeToCart(coffee);
    }
    return;
  }

  function decrementeCoffee() {
    onDecrementeCoffee(coffee.id);
  }

  function incrementCoffee() {
    onIncrementCoffee(coffee.id);
  }

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
          <button
            onClick={() => {
              handleDecreaseCoffeeToCart(coffee.id);
              decrementeCoffee();
            }}
          >
            <Minus size={32} weight="bold" />
          </button>
          <p>{coffee.quantity}</p>
          <button
            onClick={() => {
              handleAddNewCoffeeToCart(coffee);
              incrementCoffee();
            }}
          >
            <Plus size={32} weight="bold" />
          </button>
        </div>

        <NavLink to="/checkout">
          <Cart onClick={handleNavigateToCart}>
            <ShoppingCart size={22} weight="fill" />
          </Cart>
        </NavLink>
      </Buy>
    </CardContainer>
  );
}
