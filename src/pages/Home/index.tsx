import { CatalogCard } from "./components/CatalogCard";
import { Intro } from "./components/Intro";
import { CardListContainer, NavBar } from "./style";

import { coffees } from "../../utils/coffees";
import { ChangeEvent, useCallback, useState } from "react";

import { debounce } from "lodash";

export function Home() {
  const [search, setSearch] = useState("");

  const handleSearchChange = useCallback((value: string) => {
    const debouncedSearch = debounce((searchValue: string) => {
      setSearch(searchValue);
    }, 300);
    debouncedSearch(value);
  }, []);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    handleSearchChange(event.target.value);
  };

  const filteredCoffees = search.length
    ? coffees.filter((coffee) =>
        coffee.title.toLowerCase().includes(search.toLowerCase()),
      )
    : coffees;

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
          return <CatalogCard key={coffee.id} coffee={coffee} />;
        })}
      </CardListContainer>
    </>
  );
}
