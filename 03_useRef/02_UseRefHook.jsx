//* Persisting Values Across Renders:
//* SHOULD REMOVE <StrictMode> from main.tsx or else it will re-render twice on first load.

import { useEffect, useRef, useState } from "react";

export default function UseRef() {
  const [value, setValue] = useState(0);
  const countRef = useRef < number > 1;

  useEffect(() => {
    countRef.current += 1;
  });

  return (
    <div>
      <div className="flex gap-4 mx-auto w-1/2 justify-between my-10">
        <button
          type="button"
          onClick={() => setValue((prev) => prev - 1)}
          className="bg-blue-300 px-4 py-2 rounded-xl"
        >
          -1
        </button>
        <h1>{value}</h1>
        <button
          type="button"
          onClick={() => setValue((prev) => prev + 1)}
          className="bg-blue-300 px-4 py-2 rounded-xl"
        >
          +1
        </button>
      </div>
      <div>
        <h1 className="text-center">Component Rerender:{countRef.current}</h1>
      </div>
    </div>
  );
}
