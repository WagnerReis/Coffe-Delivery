import { HeaderContainer, Location, Cart, CartBadge } from "./styles";

import logo from "../../assets/logo.svg";
import { ShoppingCart, MapPin } from "phosphor-react";

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="Coffe Delivery" />

      <nav>
        <Location>
          <MapPin size={22} weight="fill" />
          Porto Alegre, RS
        </Location>
        <Cart>
          <ShoppingCart size={22} weight="fill" />
          <CartBadge>3</CartBadge>
        </Cart>
      </nav>
    </HeaderContainer>
  );
}
