import { CatalogCard } from "./components/CatalogCard";
import { Intro } from "./components/Intro";
import { CardListContainer, NavBar } from "./style";

import { coffees } from "../../utils/coffees";

export function Home() {
  return (
    <>
      <Intro />
      <NavBar>
        <h2>Nossos cafés</h2>
        <input type="text" placeholder="Pesquisar café..." />
      </NavBar>
      <CardListContainer>
        {coffees.map((coffee) => {
          return <CatalogCard key={coffee.id} coffee={coffee} />;
        })}
      </CardListContainer>
    </>
  );
}
