import React, { useState } from "react";
import {
  Difficulty,
  DifficultyButton,
  GameContainer,
  GameStyle,
  GameBord,
  GameInfo,
  Status,
  Moves,
  Move,
  MoveButton
} from "./Game.css";
import Bord from "../Board";
import { calculateWinner } from "../../helpers/calculate";

function Game() {
  const [xIsNext, setXIsNext] = useState(true);
  const [stepNumber, setStepNumber] = useState(0);
  const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
  const current = history[stepNumber];
  const { winner, winnerCondition } = calculateWinner(current.squares);
  const [selected, setSelected] = useState(`medium`);
  console.log(winnerCondition)

  function renderStatus() {
    return (
      <Status>
        {winner
          ? "Winner is " + winner
          : "Next player is " + (xIsNext ? "X" : "O")}
      </Status>
    );
  }

  function renderMoves() {
    return (
      <Moves>
        {history.map((step, move) => {
          const desc = move ? "Go to #" + move : "Start the game";
          return (
            <Move key={move}>
              <MoveButton onClick={() => jumpTo(move)}>{desc}</MoveButton>
            </Move>
          );
        })}
      </Moves>
    );
  }

  function jumpTo(move) {
    setStepNumber(move);
    setXIsNext(move % 2 === 0);
  }

  const handleDifficulty = (difficulty) => () =>{
    setSelected(difficulty)
  }

  function handleClick(i) {
    const newHistory = history.slice(0, stepNumber + 1);
    const current = newHistory[newHistory.length - 1];
    const squares = current.squares.slice();
    const { winner } = calculateWinner(squares);
    if (winner || squares[i]) {
      return;
    }

    squares[i] = xIsNext ? "X" : "O";
    setHistory([...newHistory, { squares }]);
    setXIsNext(!xIsNext);
    setStepNumber(newHistory.length);
  }

  return (
    <GameContainer>
      <Difficulty>
        <DifficultyButton
          selected={selected === `beginner`}
          onClick={handleDifficulty(`beginner`)}
        >
          Beginner
        </DifficultyButton>
        <DifficultyButton
          selected={selected ===`medium`}
          onClick={handleDifficulty(`medium`)}
        >
          Medium
        </DifficultyButton>
        <DifficultyButton
          selected={selected === `hard`}
          onClick={handleDifficulty(`hard`)}
        >
          Hard
        </DifficultyButton>
      </Difficulty>
      <GameStyle>
        <GameBord>
          <Bord onClick={handleClick} squares={current.squares} winnerCondition={winnerCondition}/>
        </GameBord>
        <GameInfo>
          {renderStatus()}
          {renderMoves()}
        </GameInfo>
      </GameStyle>
    </GameContainer>
  );
}

export default Game;
