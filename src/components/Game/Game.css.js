import styled, { css } from "styled-components";

export const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Difficulty = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const DifficultyButton = styled.div`
  cursor: pointer;
  margin-right: 0.3125rem;
  padding: 0.3125rem 0.625rem;
  border-radius: 0.25rem;
  border: 1px solid black;
  min-width: 4rem;
  text-align: center;
  transition: 0.15s ease-in;
  user-select: none;

  &:hover {
    background-color: #ebf5fb;
  }

  ${({ selected }) =>
    selected &&
    css`
      background-color: #538fbe;
      color: #fff;
      &:hover {
        background-color: #538fbe;
      }
    `}
`;

export const GameStyle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: row;
  margin: 0 auto;
`;

export const GameBord = styled.div``;

export const GameInfo = styled.div`
  margin-left: 1.25rem;
  text-align: center;
`;

export const Status = styled.div`
  margin-bottom: 0.625rem;
`;

export const Moves = styled.ul`
  padding-left: 1.875rem;
`;

export const Move = styled.li`
  margin-bottom: 0.3125rem;
`;

export const MoveButton = styled.button`
  border-radius: 0.625rem;
`;
