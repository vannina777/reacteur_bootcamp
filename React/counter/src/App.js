import React, { useState } from "react";

const App = () => {
  const [counterA, setCounterA] = useState(0);
  const [counterB, setCounterB] = useState(0);
  const [counterC, setCounterC] = useState(0);

  let total = counterA + counterB + counterC;

  let buttonAddA = (
    <button
      onClick={() => {
        setCounterA(counterA + 1);
        total += 1;
      }}
    >
      {" "}
      +
    </button>
  );

  if (counterA >= 10) {
    buttonAddA = null;
  }

  let buttonSubA = (
    <button
      onClick={() => {
        setCounterB(counterA - 1);
      }}
    >
      {" "}
      -
    </button>
  );

  if (counterA <= 0) {
    buttonSubA = null;
  }

  //buttons B

  let buttonAddB = (
    <button
      onClick={() => {
        setCounterB(counterB + 1);
      }}
    >
      {" "}
      +
    </button>
  );

  if (counterB >= 10) {
    buttonAddB = null;
  }

  let buttonSubB = (
    <button
      onClick={() => {
        setCounterB(counterB - 1);
      }}
    >
      {" "}
      -
    </button>
  );

  if (counterB <= 0) {
    buttonSubB = null;
  }

  // buttons C

  let buttonAddC = (
    <button
      onClick={() => {
        setCounterC(counterC + 1);
      }}
    >
      {" "}
      +
    </button>
  );

  if (counterC >= 10) {
    buttonAddC = null;
  }

  let buttonSubC = (
    <button
      onClick={() => {
        setCounterC(counterC - 1);
      }}
    >
      {" "}
      -
    </button>
  );

  if (counterC <= 0) {
    buttonSubC = null;
  }

  // block at 18 -- not good, need to refactor

  if (total >= 18) {
    buttonAddA = null;
    buttonAddB = null;
    buttonAddC = null;
  }

  // declare a boolean with the button JSX as an argument (that is true ) so if left is true -> passes the element to the right

  return (
    <div className="container">
      <h1> Etape 5 </h1>
      <div className="Counter">
        <div>
          {buttonSubA}

          <span className="Counter--screen"> {counterA} </span>

          {buttonAddA}
        </div>

        <div>
          {buttonSubB}

          <span className="Counter--screen"> {counterB} </span>

          {buttonAddB}
        </div>

        <div>
          {buttonSubC}

          <span className="Counter--screen"> {counterC} </span>

          {buttonAddC}
        </div>

        <h1> Total: {total}</h1>
      </div>
    </div>
  );
};

export default App;
