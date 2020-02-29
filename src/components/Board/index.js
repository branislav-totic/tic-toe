import React from "react";
import Square from "../Square";
import { BordStyle, BorderRow } from "./Board.css";

function Bord({ squares, onClick }) {
  function renderSquare(i) {
    return <Square value={squares[i]} onClick={() => onClick(i)} />;
  }
  return (
    <BordStyle>
      <BorderRow>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </BorderRow>
      <BorderRow>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </BorderRow>
      <BorderRow>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </BorderRow>
    </BordStyle>
  );
}

export default Bord;
