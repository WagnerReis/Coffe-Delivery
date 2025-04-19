import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const Title = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;

  svg {
    color: ${({ theme }) => theme["yellow-dark"]};
  }

  span {
    ${mixins.fonts.textM};
    color: ${({ theme }) => theme["base-subtitle"]};
  }

  p {
    ${mixins.fonts.textS};
    color: ${({ theme }) => theme["base-text"]};
  }
`;

export const FormAddress = styled.form`
  margin-top: 2rem;

  display: flex;
  gap: 1rem;
  flex-direction: column;
`;

export const FormRow = styled.div`
  display: flex;
  gap: 0.75rem;

  div:last-child {
    width: 100%;
  }
`;
