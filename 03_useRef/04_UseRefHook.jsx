//* Storing Interval IDs or Timers:

import React, { useRef, useEffect } from "react";

const Timer = () => {
  const intervalRef = (useRef < NodeJS.Timeout) | (null > null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      console.log("Timer running...");
    }, 1000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current); // Clean up the interval when the component unmounts
      }
    };
  }, []);

  return <div>Check the console to see the timer running!</div>;
};

export default Timer;
