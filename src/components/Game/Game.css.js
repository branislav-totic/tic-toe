import styled from "styled-components";

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
  margin-left: 20px;
  text-align: center;
`;
export const Status = styled.div`
  margin-bottom: 10px;
`;
export const Moves = styled.ul`
  padding-left: 30px;
`;

export const Move = styled.li`
  margin-bottom: 5px;
`;

export const MoveButton = styled.button`
  border-radius: 10px;
`;
