import React from "react";
import { SquareStyle } from "./Square.css";

function Square({ value, onClick }) {
  return <SquareStyle onClick={onClick}>{value}</SquareStyle>;
}

export default Square;
