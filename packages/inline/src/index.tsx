import InlineCluster, {
  InlineClusterProps,
  isFlexGapSupported,
} from "@bedrock-layout/inline-cluster";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

type Stretch = "all" | "start" | "end" | number;
type SwitchAt = string | number;

export interface InlineProps extends InlineClusterProps {
  stretch?: Stretch;
  switchAt?: SwitchAt;
}

const inlineStyles = css<InlineProps>`
  flex-wrap: nowrap;
  ${({ stretch }) =>
    stretch === "all"
      ? `> *  { flex: 1 }`
      : stretch === "start"
      ? `> :first-child { flex: 1 }`
      : stretch === "end"
      ? `> :last-child { flex: 1 }`
      : typeof stretch === "number"
      ? `> :nth-child(${stretch + 1}) { flex: 1 }`
      : null}
`;

const responsive = css<InlineProps>`
  --switchAt: ${({ switchAt }) =>
    typeof switchAt === "string" ? switchAt : `${switchAt}px`};
  flex-wrap: wrap;
  & > * {
    flex-basis: calc((var(--switchAt) - (100% - var(--gutter))) * 999);
  }
`;

function shouldUseSwitch(switchAt?: SwitchAt) {
  if (switchAt && switchAt > -1) {
    return true;
  }

  if (typeof switchAt === "string" && typeof CSS !== undefined) {
    return CSS.supports(`height: ${switchAt}`);
  }

  return false;
}

const Inline = styled(InlineCluster).attrs<InlineProps>(() => {
  return {
    "data-bedrock-layout-inline": "",
    "data-bedrock-layout-inline-cluster": undefined,
  };
})<InlineProps>`
  ${isFlexGapSupported
    ? css`
        ${inlineStyles}
        ${(props) => shouldUseSwitch(props.switchAt) && responsive}
      `
    : css`
        & > * {
          ${inlineStyles}
          ${(props) => shouldUseSwitch(props.switchAt) && responsive}
        }
      `}
`;

Inline.displayName = "Inline";

Inline.propTypes = {
  ...InlineCluster.propTypes,
  stretch: PropTypes.oneOfType([
    PropTypes.oneOf<Stretch>(["all", "start", "end"]),
    PropTypes.number,
  ]),
  switchAt: (PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]) as unknown) as React.Validator<SwitchAt>,
};

export default Inline;
