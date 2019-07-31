import React from "react";
import { motion } from "framer-motion";

import Board from "./Board.js";

const App = () => {
  const [positions, setPositions] = React.useState([
    "X",
    "O",
    "X",
    "O",
    "X",
    "O",
    "X",
    "O",
    "X"
  ]);
  const [isXturn, setXturn] = React.useState(true);
  const [gameStarted, setGameStarted] = React.useState(false);
  const [gameType, setGameType] = React.useState(null);
  const [winner, setWinner] = React.useState(null);
  const [move, setMove] = React.useState(0);

  // checks state to identify winner
  const checkWinner = () => {
    const winnerPosition = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < winnerPosition.length; i++) {
      const [a, b, c] = winnerPosition[i];
      if (positions[a] === positions[b] && positions[a] === positions[c]) {
        if (positions[a] !== "") {
          console.log("The winner is player" + positions[a]);
          setGameStarted(false);
          setWinner(positions[a]);
          /* this.setState({
            gameStarted: false,
            winner: positions[a]
          }); */
        }
      }
    }
  };

  // resets game state
  const newGame = gameType => {
    setPositions(["", "", "", "", "", "", "", "", ""]);
    setXturn(true);
    setGameStarted(true);
    setWinner(null);
    setMove(0);
    setGameType(gameType);

    // impossible hook ? need to pass type in function parameter ?

    /* if (computer) {
      resetState["gameType"] = "computer";
    } else {
      resetState["gameType"] = "human";
    }
    this.setState(resetState); */
  };

  const computerChoice = () => {
    let choice = Math.floor(Math.random() * 9);
    while (positions[choice] === "O" || positions[choice] === "X") {
      choice = Math.floor(Math.random() * 9);
    }
    return choice;
  };

  // handles players' clicks || might not work with hooks
  const clickHandler = index => {
    if (positions[index] === "" && gameStarted) {
      isXturn ? (positions[index] = "X") : (positions[index] = "O");

      setXturn(!isXturn); // impossible hook ?
      setMove(move + 1);
      /* 
      state.isXturn = !isXturn;
      state.move += 1;
      this.setState({ state }, () => {
        this.checkWinner();
      }); */
    }
  };

  if (
    isXturn === false &&
    gameType === "computer" &&
    winner === null &&
    move < 9
  ) {
    window.setTimeout(() => {
      const computerChoi = computerChoice();
      clickHandler(computerChoi);
      console.log("I am stucked");
    }, 700);
  }
  return (
    <div className="container">
      {winner ? (
        <div className="middleCard">
          <h1> 🎉 Player {winner} won ! 🎉 </h1>
        </div>
      ) : null}
      {move === 9 && winner === null ? (
        <div className="middleCard">
          <h1> This is a draw </h1>
        </div>
      ) : null}
      <div className="player-indicator">
        <div className={isXturn ? "turn-indicator active" : "turn-indicator "}>
          X
        </div>{" "}
        <div className={isXturn ? "turn-indicator" : "turn-indicator active"}>
          O
        </div>{" "}
      </div>
      <Board positions={positions} clickHandler={clickHandler} />
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => newGame("human")}
      >
        {" "}
        New Game
      </motion.button>{" "}
      <button onClick={() => newGame("computer")}>
        {" "}
        New Game vs. Computer
      </button>
    </div>
  );
};

export default App;
