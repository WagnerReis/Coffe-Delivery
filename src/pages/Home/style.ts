import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const CardListContainer = styled.div`
  width: 100%;
  padding: 0 10rem;
  padding-left: 22rem;
  padding-right: 22rem;
  padding-bottom: 8rem;
  background: ${(props) => props.theme.background};

  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 2.6rem;

  & > * {
    flex: 0 0 auto;
  }
`;

export const NavBar = styled.nav`
  width: 100%;
  padding: 0 22rem;
  margin: 2rem 0;

  display: flex;
  justify-content: space-between;

  h2 {
    ${mixins.fonts.titleL}
    color: ${(props) => props.theme["base-subtitle"]};
  }

  input {
    height: 2.625rem;
    width: 25rem;
    padding: 0.5rem;
    border-radius: 4px;
    border: 1px solid ${(props) => props.theme["base-input"]};
  }
`;
