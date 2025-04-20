import { CatalogCard } from "./components/CatalogCard";
import { Intro } from "./components/Intro";
import { CardListContainer, NavBar } from "./style";

import { ChangeEvent, useCallback, useEffect, useState } from "react";

import { debounce } from "lodash";
import { useCheckout } from "../../hooks/useCheckout";

import { coffees as coffeesCatalogDefault } from "../../utils/coffees";

export function Home() {
  const { coffees } = useCheckout();

  const [search, setSearch] = useState("");
  const [coffeesCatalog, setCoffeesCatalog] = useState(coffeesCatalogDefault);

  useEffect(() => {
    setCoffeesCatalog((state) => {
      return state.map((coffee) => {
        const coffeeIncart = coffees.find(
          (item) => item.title === coffee.title,
        );

        if (coffeeIncart) {
          return {
            ...coffee,
            quantity: coffeeIncart.quantity,
          };
        }

        return coffee;
      });
    });
  }, [coffees]);

  const handleSearchChange = useCallback((value: string) => {
    const debouncedSearch = debounce((searchValue: string) => {
      setSearch(searchValue);
    }, 300);
    debouncedSearch(value);
  }, []);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    handleSearchChange(event.target.value);
  };

  function onIncrementCoffee(coffeeId: string) {
    setCoffeesCatalog((state) => {
      return state.map((coffee) => {
        if (coffee.id === coffeeId) {
          return {
            ...coffee,
            quantity: coffee.quantity + 1,
          };
        }
        return coffee;
      });
    });
  }

  function onDecrementeCoffee(coffeeId: string) {
    setCoffeesCatalog((state) =>
      state.map((coffee) => {
        if (coffee.id === coffeeId) {
          if (coffee.quantity > 0) {
            return {
              ...coffee,
              quantity: coffee.quantity - 1,
            };
          }
        }
        return coffee;
      }),
    );
  }

  const filteredCoffees = search.length
    ? coffeesCatalog.filter((coffee) =>
        coffee.title.toLowerCase().includes(search.toLowerCase()),
      )
    : coffeesCatalog;

  return (
    <>
      <Intro />
      <NavBar>
        <h2>Nossos cafés</h2>
        <input
          onChange={handleInputChange}
          type="text"
          placeholder="Pesquisar café..."
        />
      </NavBar>
      <CardListContainer>
        {filteredCoffees.map((coffee) => {
          return (
            <CatalogCard
              key={coffee.id}
              coffee={coffee}
              onDecrementeCoffee={onDecrementeCoffee}
              onIncrementCoffee={onIncrementCoffee}
            />
          );
        })}
      </CardListContainer>
    </>
  );
}
