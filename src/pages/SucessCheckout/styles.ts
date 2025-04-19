import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const SuccessContainer = styled.main`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 2.5rem;
  padding: 5rem 0;
  max-width: 72rem;
  margin: 0 auto;

  h1 {
    ${mixins.fonts.titleL};
    color: ${(props) => props.theme["yellow-dark"]};
  }
`;

export const SubTitle = styled.div`
  ${mixins.fonts.textL};
  color: ${(props) => props.theme["base-subtitle"]};
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const OrderInfo = styled.div`
  width: 32.875rem;
  height: 16.875rem;

  padding: 2.5rem;

  border: 1px solid transparent;
  border-radius: 6px 36px;
  background-image:
    linear-gradient(
      ${(props) => props.theme.background},
      ${(props) => props.theme.background}
    ),
    linear-gradient(
      to right,
      ${(props) => props.theme.yellow},
      ${(props) => props.theme["purple-dark"]}
    );
  background-origin: border-box;
  background-clip: padding-box, border-box;

  div {
    display: flex;
    align-items: center;
  }
`;

export const Item = styled.div`
  width: 100%;
  margin-bottom: 2rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const BACKGROUND_COLOR = {
  yellowDark: "yellow-dark",
  baseText: "base-text",
  yellow: "yellow",
  purple: "purple",
} as const;

interface BackgroundColor {
  background: keyof typeof BACKGROUND_COLOR;
}

export const Icon = styled.div<BackgroundColor>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: ${(props) => props.theme[BACKGROUND_COLOR[props.background]]};
  color: ${(props) => props.theme.white};
`;

export const ItemDescription = styled.div`
  display: flex;
  flex-direction: column;
  height: 2.5rem;
  margin-left: 1rem;

  p,
  strong {
    margin-top: 0;
    align-self: flex-start;
    width: 100%;
    text-align: left;
  }
`;
