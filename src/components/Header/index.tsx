import { HeaderContainer, Location, Cart, CartBadge } from "./styles";

import logo from "../../assets/logo.svg";
import { ShoppingCart, MapPin } from "phosphor-react";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logo} alt="Coffee Delivery" />
      </NavLink>
      <nav>
        <Location>
          <MapPin size={22} weight="fill" />
          Porto Alegre, RS
        </Location>
        <NavLink to="/checkout">
          <Cart>
            <ShoppingCart size={22} weight="fill" />
            <CartBadge>3</CartBadge>
          </Cart>
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
