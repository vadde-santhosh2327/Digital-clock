import React, { useState, useEffect } from "react";
import './App.css';

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Clean up interval on component unmount
    return () => clearInterval(timerID);
  }, []);

  const formatTime = (time) => {
    const hours = time.getHours().toString().padStart(2, '0');
    const minutes = time.getMinutes().toString().padStart(2, '0');
    const seconds = time.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div className="clock">
      <h1>{formatTime(time)}</h1>
    </div>
  );
}

export default DigitalClock;
