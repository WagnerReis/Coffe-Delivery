import styled, { css } from "styled-components";
import { mixins } from "../../styles/mixins";

const SIZE = {
  small: css`
    width: 3.75rem;
  `,
  medium: css`
    width: 12.5rem;
  `,
  mediumXs: css`
    width: 17.25rem;
  `,
  large: css`
    width: 100%;
  `,
} as const;
export const InputWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
`;

export const OptionalLabel = styled.span`
  position: absolute;
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  color: ${(props) => props.theme["base-label"]};
  font-size: 0.75rem;
  font-style: italic;
`;
export const Error = styled.p`
  color: red;
  ${mixins.fonts.textXS}
  margin-top: 0.25rem;
  font-weight: 400;
`;

export const InputForm = styled.input<{
  size: keyof typeof SIZE;
}>`
  ${(props) => props.size && SIZE[props.size]};

  height: 2.625rem;
  border-radius: 6px;
  border: none;
  border: 1px solid ${(props) => props.theme["base-button"]};

  background: ${(props) => props.theme["base-input"]};
  color: ${(props) => props.theme["base-text"]};
  ${mixins.fonts.textS}

  padding: 0.75rem;

  &::placeholder {
    color: ${(props) => props.theme["base-label"]};
  }
`;
