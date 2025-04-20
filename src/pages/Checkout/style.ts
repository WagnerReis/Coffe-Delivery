import styled from "styled-components";
import { mixins } from "../../styles/mixins";

//INPUT

export const Input = styled.input`
  background: ${({ theme }) => theme["base-input"]};
  border: 1px solid ${({ theme }) => theme["base-button"]};
  border-radius: 6px;
  padding: 0.75rem;
  color: ${({ theme }) => theme["base-text"]};
  ${mixins.fonts.textS}

  width: 100%;

  flex: 1;
`;

export const FormContainer = styled.form`
  width: 100%;
  padding: 2.5rem 22rem;

  display: flex;
  gap: 2rem;

  h2 {
    ${mixins.fonts.titleXS};
    color: ${({ theme }) => theme["base-subtitle"]};
  }
`;

export const FormCheckout = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormSection = styled.section`
  width: 40rem;
  min-height: 23.25rem;

  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2.5rem;

  background: ${({ theme }) => theme["base-card"]};
  border-radius: 6px;
`;

export const PaymentOptions = styled.section`
  width: 40rem;
  height: 12.9375rem;
  margin-top: 0.75rem;

  padding: 2.5rem;

  background: ${({ theme }) => theme["base-card"]};
  border-radius: 6px;

  display: flex;
  flex-direction: column;
`;

export const PaymentOptionTitle = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;

  svg {
    color: ${({ theme }) => theme["purple"]};
  }

  strong {
    ${mixins.fonts.textM};
    color: ${({ theme }) => theme["base-subtitle"]};
  }

  p {
    ${mixins.fonts.textS};
    color: ${({ theme }) => theme["base-text"]};
  }
`;

export const PaymentOptionCards = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
`;

export const CardOption = styled.button<{ isSelected?: boolean }>`
  width: 178px;
  height: 51px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;

  background: ${({ theme, isSelected }) =>
    isSelected ? theme["purple-light"] : theme["base-button"]};
  border-radius: 6px;
  margin-top: 2rem;
  cursor: pointer;

  color: ${({ theme }) => theme["base-text"]};
  ${mixins.fonts.buttonM}

  border: 1px solid ${({ theme, isSelected }) =>
    isSelected ? theme["purple"] : "transparent"};

  svg {
    color: ${({ theme }) => theme["purple"]};
  }

  &:hover {
    background: ${({ theme, isSelected }) =>
      isSelected ? theme["purple-light"] : theme["base-hover"]};
  }
`;

export const CardContainer = styled.div`
  width: 28rem;
  min-height: 31.125rem;

  background: ${({ theme }) => theme["base-card"]};
  border-radius: 6px 36px;

  padding: 2.5rem;
  margin-top: 1rem;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  hr {
    border: 1px solid ${({ theme }) => theme["base-button"]};
  }
`;

export const Summary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      ${mixins.fonts.textS};
      color: ${({ theme }) => theme["base-text"]};
    }
  }

  div:last-child {
    p {
      ${mixins.fonts.textLBold};
      color: ${({ theme }) => theme["base-subtitle"]};
    }
  }
`;

export const ConfirmButton = styled.button`
  width: 100%;
  height: 2.875rem;

  color: ${({ theme }) => theme.white};
  background: ${({ theme }) => theme.yellow};
  ${mixins.fonts.buttonG};

  border-radius: 6px;
  border: none;

  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme["yellow-dark"]};
  }
`;
