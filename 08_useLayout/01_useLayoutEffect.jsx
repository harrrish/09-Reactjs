import React, { useEffect, useLayoutEffect } from "react";

export default function UseLayoutEffect() {
  useEffect(() => {
    console.log("Message from useEffect");
  }, []);
  useLayoutEffect(() => {
    console.log("Message from useLayoutEffect");
    //* Prints first before anything
  }, []);

  return (
    <div className="grid place-items-center h-screen bg-blue-400">
      <h1 className="text-black">Centered Item</h1>
      {Array(4000)
        .fill("")
        .map((item, index) => {
          return (
            <div key={index}>
              <h1>{Math.pow(Math.random(), 10)}</h1>
            </div>
          );
        })}
    </div>
  );
}
