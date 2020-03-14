import styled, { css, keyframes } from "styled-components";

const width = keyframes`
  0%   {width: 0;}
  100% {width: 100%;}
`;

export const BordStyle = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 5rem 5rem 5rem;
  grid-template-rows: 5rem 5rem 5rem; 
  grid-column-gap: 0.685rem;
  grid-row-gap: 0.685rem;

  ${({ winnerCondition }) =>
    winnerCondition &&
    css`
        ::after {
          content: "";
          display: block;
          position: absolute;
          height: 0.3125rem;
          border: 1px solid #2d6898;
          border-radius: 0.125rem;
          background-color: #fff;
          animation: ${width} 1s;

          ${winnerCondition === `first-row` &&
            css`
              width: calc(100% + (2 * 0.3125rem));
              left: -0.3125rem;
              top: calc(16.15% - 0.125rem);
            `}

          ${winnerCondition === `second-row` &&
            css`
              width: calc(100% + (2 * 0.3125rem));
              left: -0.3125rem;
              top: calc(0.125rem - 0.125rem);
            `}

          ${winnerCondition === `third-row` &&
            css`
              width: calc(100% + (2 * 0.3125rem));
              left: -0.3125rem;
              top: calc(82.48% - 0.125rem);
            `}

          ${winnerCondition === `first-column` &&
            css`
              width: calc(100% + (2 * 0.3125rem));
              left: calc(16.15% + 0.125rem + 0.15625rem);
              top: -0.3125rem;
              transform: rotate(90deg);
              transform-origin: 0 0;
            `}

          ${winnerCondition === `second-column` &&
            css`
              width: calc(100% + (2 * 0.3125rem));
              left: calc(50% + 0.125rem + 0.15625rem);
              top: -0.3125rem;
              transform: rotate(90deg);
              transform-origin: 0 0;
            `}

          ${winnerCondition === `thrid-column` &&
            css`
              width: calc(100% + (2 * 0.3125rem));
              left: calc(82.48% + 0.125rem + (2*0.15625rem));
              top: -0.3125rem;
              transform: rotate(90deg);
              transform-origin: 0 0;
            `}

          ${winnerCondition === `left-right` &&
            css`
              width: calc(100% + (2 * 3.925rem));
              left: 0;
              top: -0.3125rem;
              transform: rotate(45deg);
              transform-origin: 0 0;
            `}

          ${winnerCondition === `right-left` &&
            css`
              width: calc(100% + (2 * 3.925rem));
              left: calc(100% + 0.3125rem + (2*0.15625rem));
              top: -0.3125rem;
              transform: rotate(135deg);
              transform-origin: 0 0;
            `}
        }
      `}
`;
