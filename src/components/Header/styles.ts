import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme["background"]};
  height: 6.5rem;
  padding: 0 22rem;

  width: 100%;
  max-width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    gap: 0.75rem;
  }

  img {
    cursor: pointer;
  }
`;

export const Location = styled.div`
  background: ${({ theme }) => theme["purple-light"]};
  color: ${({ theme }) => theme["purple-dark"]};
  padding: 0.6rem;
  border-radius: 8px;
  font-size: 0.875rem;
  line-height: 1.3;

  display: flex;
  align-items: center;
  gap: 0.25rem;

  svg {
    color: ${({ theme }) => theme["purple"]};
  }
`;

export const Cart = styled.div`
  background: ${({ theme }) => theme["yellow-light"]};
  color: ${({ theme }) => theme["yellow-dark"]};
  border-radius: 8px;
  border: 1px solid transparent;

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  padding: 0.6rem;
  position: relative;

  &:hover {
    border: 1px solid ${({ theme }) => theme["yellow-dark"]};
  }
`;

export const CartBadge = styled.div`
  background: ${({ theme }) => theme["yellow-dark"]};
  color: ${({ theme }) => theme["white"]};
  position: absolute;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  font-size: 0.875rem;
  line-height: 1.3;

  display: flex;
  align-items: center;
  justify-content: center;
  top: -8px;
  right: -8px;
`;
