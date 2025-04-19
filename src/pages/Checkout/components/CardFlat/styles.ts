import styled from "styled-components";
import { mixins } from "../../../../styles/mixins";

export const CardFlatContainer = styled.div`
  width: 100%;
  height: 5rem;

  padding: 0.5rem 0.25rem;

  display: flex;
  justify-content: space-between;

  img {
    width: 4rem;
    height: 4rem;
  }

  strong {
    ${mixins.fonts.textMBold}
    color: ${(props) => props.theme["base-text"]};
  }
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  p {
    ${mixins.fonts.textM}
    color: ${(props) => props.theme["base-subtitle"]};
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    background: ${(props) => props.theme["base-button"]};
    padding: 0.5rem;
    border-radius: 6px;

    &:hover {
      background: ${(props) => props.theme["base-hover"]};

      svg {
        color: ${(props) => props.theme["purple-dark"]};
      }
    }

    svg {
      color: ${(props) => props.theme.purple};
    }
  }

  div:last-child {
    cursor: pointer;
  }
`;

export const Counter = styled.div`
  /* display: flex;
  align-items: center;
  gap: 0.5rem;

  background: ${(props) => props.theme["base-button"]};
  padding: 0.5rem;
  border-radius: 6px; */

  button {
    background: transparent;
    border: none;
    cursor: pointer;
  }

  p {
    ${mixins.fonts.textS}
    color: ${(props) => props.theme["base-title"]};
  }

  svg {
    color: ${(props) => props.theme.purple};

    &:hover {
      color: ${(props) => props.theme["purple-dark"]};
    }
  }
`;
