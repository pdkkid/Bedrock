import {
  SpacingOptions,
  getSpacingValue,
} from "@bedrock-layout/spacing-constants";
import PropTypes from "prop-types";
import styled from "styled-components";

export interface StackProps {
  gutter: keyof SpacingOptions;
}

export const Stack = styled.div.attrs<StackProps>(({ gutter, theme }) => {
  return {
    "data-bedrock-layout-stack": "",
  };
})<StackProps>`
  box-sizing: border-box;
  --gutter: ${(props) => getSpacingValue(props.theme, props.gutter) ?? "0px"};

  display: grid;
  gap: var(--gutter);
  align-content: start;

  & > [data-bedrock-layout-column] {
    grid-column: span 1 / auto;
  }
`;

Stack.displayName = "Stack";

Stack.propTypes = {
  gutter: PropTypes.string.isRequired as React.Validator<keyof SpacingOptions>,
};
