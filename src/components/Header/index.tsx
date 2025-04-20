import { HeaderContainer, Location, Cart, CartBadge } from "./styles";

import logo from "../../assets/logo.svg";
import { ShoppingCart, MapPin } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { useCheckout } from "../../hooks/useCheckout";

export function Header() {
  const { coffees } = useCheckout();

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
            {coffees.length > 0 && <CartBadge>{coffees.length}</CartBadge>}
          </Cart>
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
