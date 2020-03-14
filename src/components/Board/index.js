import React from "react";
import Square from "../Square";
import { BordStyle } from "./Board.css";

function Bord({ squares, onClick, winnerCondition }) {
  function renderSquare(i) {
    return <Square value={squares[i]} onClick={() => onClick(i)} />;
  }
  return (
    <BordStyle winnerCondition={winnerCondition}>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
    </BordStyle>
  );
}

export default Bord;
