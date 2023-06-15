import React, { useState, useEffect } from "react";

const PomodoroTimer = ({ onTimerComplete }) => {
  const [time, setTime] = useState(1500); // 1500 seconds = 25 minutes
  const [isRunning, setIsRunning] = useState(false);
  const [pomodoroCount, setPomodoroCount] = useState(0);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    }

    if (time === 0) {
      setIsRunning(false);
      clearInterval(intervalId);

      if (pomodoroCount === 4) {
        onTimerComplete(15, 30);
      } else {
        onTimerComplete(5);
      }

      setPomodoroCount((prevCount) => prevCount + 1);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning, time, onTimerComplete, pomodoroCount]);

  const formatTime = () => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  return (
    <div>
      <h2>Timer: {formatTime()}</h2>
      {!isRunning ? (
        <button onClick={handleStart}>Start</button>
      ) : (
        <button onClick={handleStop}>Stop</button>
      )}
    </div>
  );
};

export default PomodoroTimer;
