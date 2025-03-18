import React, { useState, useEffect } from 'react';

const Stopwatch = () => {
  const [time, setTime] = useState(0); 
  const [isRunning, setIsRunning] = useState(false); 
  const [intervalId, setIntervalId] = useState(null); 

  
  const startStopwatch = () => {
    if (!isRunning) {
      const id = setInterval(() => {
        setTime(prevTime => prevTime + 1); 
      }, 1000);
      setIntervalId(id);
      setIsRunning(true);
    }
  };

  
  const stopStopwatch = () => {
    clearInterval(intervalId); 
    setIsRunning(false);
  };

  
  const resetStopwatch = () => {
    clearInterval(intervalId); 
    setTime(0); 
    setIsRunning(false); 
  };

  
  useEffect(() => {
    return () => {
      clearInterval(intervalId); 
    };
  }, [intervalId]);

  return (
    <div>
      <h1>Stopwatch</h1>
      <p>{time}s</p>
      <button onClick={isRunning ? stopStopwatch : startStopwatch}>
        {isRunning ? 'Stop' : 'Start'}
      </button>
      <button onClick={resetStopwatch}>Reset</button>
    </div>
  );
};

export default Stopwatch;
