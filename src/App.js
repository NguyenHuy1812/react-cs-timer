import React from "react";
import formatTime from "./formatTime";
import useTimer from "./useTimer";
import "./index.css";

function App() {
  const { time, startTimer, stopTimer, resetTimer, active, splitTimer, times } = useTimer(0);
  return (
    <div className="App container">
      <h1>Coder Timer</h1>
      <div>
        <div className="timer__wrapper">
          <div className="timer__display">
            <p>{formatTime(time)}</p>
          </div>
          <div className="button__wrapper">
            <button className="button" onClick={stopTimer}>
              Stop
            </button>
            <button className="button" ref={active} onClick={startTimer}>
              Start
            </button>
            <button className="button" onClick={resetTimer}>
              Reset
            </button>
            <button
              className="button"
              onClick={splitTimer}
            >
              Split
            </button>
          </div>
        </div>
            {times.map((time, index) => (
        <div className="timer__wrapper">
          <div className="button__wrapper">
              <p key={index}>{index + 1}# {formatTime(time)}</p>
          </div>
        </div>
            ))}
      </div>
    </div>
  );
}

export default App;
