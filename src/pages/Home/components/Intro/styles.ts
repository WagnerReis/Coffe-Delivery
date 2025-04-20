import styled from "styled-components";

import introBackground from "../../../../assets/intro-background.svg";
import { mixins } from "../../../../styles/mixins";

export const IntroContainer = styled.div`
  height: 34rem;
  gap: 4.9rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding: 0 22rem;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100vw;
    height: 100%;
    background: url(${introBackground});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    z-index: 1;
  }

  img {
    z-index: 2;
    position: relative;
  }
`;

export const PrensentationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: transparent;
  margin-top: 5.875rem;

  width: 36.75rem;
  height: 28rem;

  strong {
    ${mixins.fonts.titleXL}
    color: ${({ theme }) => theme["base-title"]};
    font-family: "Baloo 2", sans-serif;
  }

  span {
    ${mixins.fonts.textL}
    color: ${({ theme }) => theme["base-subtitle"]};
  }
`;

export const BenefitsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: -1rem;
  row-gap: 1.25rem;
  margin-top: 3.125rem;

  div p {
    ${mixins.fonts.textM}
    color: ${({ theme }) => theme["base-text"]};
  }
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  width: 18.375rem;
`;

export const SmallItem = styled(Item)`
  width: 14.4375rem;
`;

export const LargeItem = styled(Item)`
  width: 18.375rem;
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

export const Icon = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "background",
})<BackgroundColor>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: ${(props) => props.theme[BACKGROUND_COLOR[props.background]]};
  color: ${(props) => props.theme.white};
`;
