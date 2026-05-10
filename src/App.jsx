import * as React from "react";
import Square from "./Elements.jsx";
import Board from "./Board.jsx";

function App() {
  const [count, setCount] = React.useState(0);

  return (
    <>
      <h1>Tic-Tac-Toe start</h1>
      <Board />
    </>
  );
}

export default App;
