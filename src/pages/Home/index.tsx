import { CatalogCard } from "../Checkout/CatalogCard";
import { Intro } from "./components/Intro";
import { CardListContainer, NavBar } from "./style";

export function Home() {
  return (
    <>
      <Intro />
      <NavBar>
        <h2>Nossos cafés</h2>
        <input type="text" placeholder="Pesquisar café..." />
      </NavBar>
      <CardListContainer>
        <CatalogCard />
        <CatalogCard />
        <CatalogCard />
        <CatalogCard />
        <CatalogCard />
        <CatalogCard />
        <CatalogCard />
        <CatalogCard />
        <CatalogCard />
        <CatalogCard />
        <CatalogCard />
        <CatalogCard />
        <CatalogCard />
        <CatalogCard />
      </CardListContainer>
    </>
  );
}
