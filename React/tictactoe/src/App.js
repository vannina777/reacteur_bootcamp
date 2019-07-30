import React from "react";
import { motion } from "framer-motion";

import Board from "./Board.js";

class App extends React.Component {
  state = {
    positions: ["X", "O", "X", "O", "X", "O", "X", "O", "X"],
    isXturn: true,
    gameStarted: false,
    gameType: "",
    winner: null,
    move: 0
  };

  // checks state to identify winner
  checkWinner = () => {
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
      if (
        this.state.positions[a] === this.state.positions[b] &&
        this.state.positions[a] === this.state.positions[c]
      ) {
        if (this.state.positions[a] !== "") {
          console.log("The winner is player" + this.state.positions[a]);
          this.setState({
            gameStarted: false,
            winner: this.state.positions[a]
          });
        }
      }
    }
  };

  // resets game state
  newGame = computer => {
    const resetState = {
      positions: ["", "", "", "", "", "", "", "", ""],
      isXturn: true,
      gameStarted: true,
      winner: null,
      move: 0
    };

    if (computer) {
      resetState["gameType"] = "computer";
    } else {
      resetState["gameType"] = "human";
    }
    this.setState(resetState);
  };

  computerChoice = () => {
    let choice = Math.floor(Math.random() * 9);
    while (
      this.state.positions[choice] === "O" ||
      this.state.positions[choice] === "X"
    ) {
      choice = Math.floor(Math.random() * 9);
    }
    return choice;
  };

  // handles players' clicks
  clickHandler = index => {
    const state = this.state;
    if (state.positions[index] === "" && this.state.gameStarted) {
      this.state.isXturn
        ? (state.positions[index] = "X")
        : (state.positions[index] = "O");
      state.isXturn = !this.state.isXturn;
      state.move += 1;
      this.setState({ state }, () => {
        this.checkWinner();
      });
    }
  };

  render = () => {
    if (
      this.state.isXturn === false &&
      this.state.gameType === "computer" &&
      this.state.winner === null &&
      this.state.move < 9
    ) {
      window.setTimeout(() => {
        const computerChoice = this.computerChoice();
        this.clickHandler(computerChoice);
        console.log("I am stucked");
      }, 700);
    }
    return (
      <div className="container">
        {this.state.winner ? (
          <div className="middleCard">
            <h1> 🎉 Player {this.state.winner} won ! 🎉 </h1>
          </div>
        ) : null}
        {this.state.move === 9 && this.state.winner === null ? (
          <div className="middleCard">
            <h1> This is a draw </h1>
          </div>
        ) : null}
        <div className="player-indicator">
          <div
            className={
              this.state.isXturn ? "turn-indicator active" : "turn-indicator "
            }
          >
            X
          </div>{" "}
          <div
            className={
              this.state.isXturn ? "turn-indicator" : "turn-indicator active"
            }
          >
            O
          </div>{" "}
        </div>
        <Board
          positions={this.state.positions}
          clickHandler={this.clickHandler}
        />
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => this.newGame()}
        >
          {" "}
          New Game
        </motion.button>{" "}
        <button onClick={() => this.newGame("computer")}>
          {" "}
          New Game vs. Computer
        </button>
      </div>
    );
  };
}
export default App;
