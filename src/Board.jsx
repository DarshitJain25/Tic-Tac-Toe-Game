import Square from "./Elements.jsx";
import * as React from "react";
function Board({ xIsNext, squares, onPlay, onTest }) {
  // const [xisNext, setXIsNext] = React.useState(true); // storing the click's state , to move with character one by one
  // const [squares, setSquares] = React.useState(Array(9).fill(null)); // storing the state of all the cells on the board

  let gameOver = squares.every((ele) => ele !== null);
  function clickHandler(i) {
    if (squares[i] || FindWinner(squares) || gameOver) {
      return;
    }

    const nextSquares = [...squares];
    nextSquares[i] = xIsNext ? "X" : "O";
    // setSquares(prevStates);
    // setXIsNext(!xisNext);

    onPlay(nextSquares);
    // onTest();
  }

  function FindWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], // rows
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], // cols
      [0, 4, 8], // diagonal
      [2, 4, 6], // anti diagonal
    ];

    for (let i = 0; i < lines.length; i++) {
      const [cellA, cellB, cellC] = lines[i];
      if (
        squares[cellA] &&
        squares[cellA] === squares[cellB] &&
        squares[cellA] === squares[cellC]
      ) {
        return squares[cellA];
      }
    }
    return null;
  }

  // function resetHandle() {
  //   setSquares(Array(squares.length).fill(null));
  //   setXIsNext(true);
  // }

  const winner = FindWinner(squares);
  let status = null;
  let over = null;
  if (winner) {
    status = "Winner : " + winner;
  } else if (!gameOver) {
    status = "Next Player : " + (xIsNext ? "X" : "O");
  }
  if (gameOver) {
    over = "Game Over";
  }
  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => clickHandler(0)} />
        <Square value={squares[1]} onSquareClick={() => clickHandler(1)} />
        <Square value={squares[2]} onSquareClick={() => clickHandler(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => clickHandler(3)} />
        <Square value={squares[4]} onSquareClick={() => clickHandler(4)} />
        <Square value={squares[5]} onSquareClick={() => clickHandler(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => clickHandler(6)} />
        <Square value={squares[7]} onSquareClick={() => clickHandler(7)} />
        <Square value={squares[8]} onSquareClick={() => clickHandler(8)} />
      </div>
      <div className="gameOver">{over}</div>

      <button className="reset" style={{ width: "100px" }}>
        Reset Game
      </button>
    </>
  );
}

export default Board;
