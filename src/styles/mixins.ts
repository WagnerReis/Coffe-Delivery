import { css, RuleSet } from "styled-components";

interface MixinsProps {
  fonts: FontsProps;
}

interface FontsProps {
  titleXL: RuleSet<object>;
  titleL: RuleSet<object>;
  titleM: RuleSet<object>;
  titleS: RuleSet<object>;
  titleXS: RuleSet<object>;
  textL: RuleSet<object>;
  textLBold: RuleSet<object>;
  textM: RuleSet<object>;
  textMBold: RuleSet<object>;
  textS: RuleSet<object>;
  textXS: RuleSet<object>;
  tag: RuleSet<object>;
  buttonG: RuleSet<object>;
  buttonM: RuleSet<object>;
}

export const mixins: MixinsProps = {
  fonts: {
    titleXL: css`
      font-family: "Baloo 2", sans-serif;
      font-size: 3rem;
      line-height: 130%;
      font-weight: 800;
    `,
    titleL: css`
      font-family: "Baloo 2", sans-serif;
      font-size: 2rem;
      line-height: 130%;
      font-weight: 800;
    `,
    titleM: css`
      font-family: "Baloo 2", sans-serif;
      font-size: 1.5rem;
      line-height: 130%;
      font-weight: 800;
    `,
    titleS: css`
      font-family: "Baloo 2", sans-serif;
      font-size: 1.25rem;
      line-height: 130%;
      font-weight: 700;
    `,
    titleXS: css`
      font-family: "Baloo 2", sans-serif;
      font-size: 1.125rem;
      line-height: 130%;
      font-weight: 700;
    `,
    textL: css`
      font-family: "Roboto", sans-serif;
      font-size: 1.25rem;
      line-height: 130%;
      font-weight: 400;
    `,
    textLBold: css`
      font-family: "Roboto", sans-serif;
      font-size: 1.25rem;
      line-height: 130%;
      font-weight: 700;
    `,
    textM: css`
      font-family: "Roboto", sans-serif;
      font-size: 1rem;
      line-height: 130%;
      font-weight: 400;
    `,
    textMBold: css`
      font-family: "Roboto", sans-serif;
      font-size: 1rem;
      line-height: 130%;
      font-weight: 700;
    `,
    textS: css`
      font-family: "Roboto", sans-serif;
      font-size: 0.875rem;
      line-height: 130%;
      font-weight: 400;
    `,
    textXS: css`
      font-family: "Roboto", sans-serif;
      font-size: 0.75rem;
      line-height: 130%;
      font-weight: 700;
    `,
    tag: css`
      font-family: "Roboto", sans-serif;
      font-size: 0.625rem;
      line-height: 130%;
      font-weight: 700;
    `,
    buttonG: css`
      font-family: "Roboto", sans-serif;
      font-size: 0.875rem;
      line-height: 160%;
      font-weight: 700;
    `,
    buttonM: css`
      font-family: "Roboto", sans-serif;
      font-size: 0.75rem;
      line-height: 160%;
      font-weight: 400;
    `,
  },
};
