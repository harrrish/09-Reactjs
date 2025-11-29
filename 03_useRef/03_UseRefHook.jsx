//* Storing Previous State:

import { useEffect, useRef, useState } from "react";

export default function UseRef() {
  const [count, setCount] = useState < number > 0;
  const prevCountRef = (useRef < number) | (string > "NaN");

  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);

  return (
    <div className="flex gap-6 items-center flex-col my-4">
      <h1>Count:{count}</h1>
      <h1>Previous Count:{prevCountRef.current}</h1>
      <button
        type="button"
        onClick={() => setCount(count + 1)}
        className="bg-gray-400 px-4 py-2"
      >
        Inc
      </button>
    </div>
  );
}
