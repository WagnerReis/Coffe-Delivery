import styled from "styled-components";
import { mixins } from "../../../styles/mixins";

export const CardContainer = styled.div`
  width: 16rem;
  height: 19.375rem;

  background: ${(props) => props.theme["base-card"]};
  border-radius: 6px 36px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  img {
    margin-top: -2rem;
    position: relative;
  }
`;

export const Tag = styled.div`
  height: 1.3125rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;

  ${mixins.fonts.tag}

  p {
    background: ${(props) => props.theme["yellow-light"]};
    color: ${(props) => props.theme["yellow-dark"]};
    border-radius: 10px;

    padding: 0.25rem 0.5rem;
  }
`;

export const Presentation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0 1.25rem;
  margin-top: 0.5rem;

  text-align: center;

  h3 {
    ${mixins.fonts.titleS}
  }

  p {
    margin-top: 0.5rem;
    ${mixins.fonts.textS}
  }
`;

export const Buy = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  margin-top: 1rem;

  width: 13rem;
  height: 2.375rem;

  strong {
    ${mixins.fonts.titleM};
    margin-left: -0.5rem;
    /* margin-left: 0.1rem; */
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    ${mixins.fonts.textM}

    width: 4.5rem;
    height: 2.375rem;
    border-radius: 6px;
    margin-left: 0.5rem;

    background: ${(props) => props.theme["base-button"]};

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      width: 1rem;
      height: 1rem;
      font-size: 2rem;
      background: transparent;
      cursor: pointer;

      color: ${(props) => props.theme["purple"]};

      &:hover {
        color: ${(props) => props.theme["purple-dark"]};
      }
    }

    p {
      color: black;
      margin: auto 0;
    }

    button {
      svg {
        color: ${(props) => props.theme["purple-dark"]};
      }
    }
  }
`;

export const Cart = styled.button`
  padding: 0.5rem;
  color: ${(props) => props.theme["base-card"]};

  background: ${(props) => props.theme["purple-dark"]};
  border: none;
  border-radius: 6px;

  cursor: pointer;

  transition: background 0.1s;

  &:hover {
    background: ${(props) => props.theme["purple"]};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 1px ${(props) => props.theme["purple-dark"]};
  }
`;
