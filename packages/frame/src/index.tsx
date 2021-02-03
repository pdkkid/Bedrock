import PropTypes from "prop-types";
import styled from "styled-components";

export interface FrameProps {
  ratio: [number, number];
  position?: string;
}

const Frame = styled.div.attrs<FrameProps>((props) => {
  const d =
    props.ratio && props.ratio[0] && Number.isInteger(props.ratio[0])
      ? props.ratio[0]
      : 1;

  const n =
    props.ratio && props.ratio[1] && Number.isInteger(props.ratio[1])
      ? props.ratio[1]
      : 1;
  return {
    style: {
      "--d": d,
      "--n": n,
    },
  };
})<FrameProps>`
  --d: 1;
  --n: 1;

  box-sizing: border-box;
  display: block;
  inline-size: 100%;
  position: relative;
  aspect-ratio: var(--d) / var(--n);

  @supports not (aspect-ratio: 1/1) {
    padding-block-end: calc(var(--n) / var(--d) * 100%);
  }

  > * {
    overflow: hidden;
    position: absolute;

    inset-block-start: 0;
    inset-block-end: 0;
    inset-inline-start: 0;
    inset-inline-end: 0;

    inset-block: 0;
    inset-inline: 0;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  > img,
  > video {
    inline-size: 100%;
    block-size: 100%;
    size: 100%;

    object-fit: cover;
    object-position: ${(props) =>
      typeof props.position === "string" ? props.position : "50%"};
  }
`;

Frame.displayName = "Frame";

type TwoNumbers = (props: FrameProps, propName: string) => Error | undefined;

const twoNumbers: TwoNumbers = ({ ratio }, propName) => {
  if (typeof ratio === "undefined") return new Error(`${propName} is required`);

  if (
    !Array.isArray(ratio) ||
    ratio.length !== 2 ||
    !ratio.every(Number.isInteger)
  ) {
    console.error(`${propName} needs to be an array of two numbers`);
  }
  return undefined;
};

Frame.propTypes = {
  //It's valid propType but type of Validator<[number, number]> makes no sense
  ratio: (twoNumbers as unknown) as React.Validator<[number, number]>,
  position: PropTypes.string,
};

export default Frame;
