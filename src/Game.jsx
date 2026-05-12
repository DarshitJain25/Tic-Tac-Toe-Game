// Adding Time Travel
// Tracking history of moves
import * as React from "react";
import Board from "./Board.jsx";
function GameHistory() {
  const [xIsNext, setXIsNext] = React.useState(true);
  const [history, setHistory] = React.useState([Array(9).fill(null)]);
  const currentSqaures = history[history.length - 1];

  function handlePlay(nextSquares) {
    // console.log("Before :  ", history);
    setHistory([...history, nextSquares]);
    setXIsNext(!xIsNext);
    // console.log("X  : ", xIsNext);
    // console.log("Current :  ", nextSquares);
  }

  //   function Test() {
  //     console.log("after :  ", history);
  //     console.log("X is next : ", xIsNext);
  //   }
  return (
    <div className="game">
      <div className="game-board">
        <Board
          xIsNext={xIsNext}
          squares={currentSqaures}
          onPlay={handlePlay}
          onTest={Test}
        />
      </div>
      <div className="game-info">
        <ol>{/*TODO*/}</ol>
      </div>
    </div>
  );
}

export default GameHistory;
