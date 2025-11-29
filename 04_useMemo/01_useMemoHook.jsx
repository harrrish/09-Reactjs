import { useMemo, useState } from "react";

export default function UseMemo() {
  const [number, setNumber] = useState(0);
  const [count, setCount] = useState(0);

  function cubeNum(num: number) {
    console.log("CALCULATION DONE!!!");
    return Math.pow(num, 3);
  }
  /* 
  //* Below Calculation would have happen every time any component got re-rendered.
            //* In this case each time count variable changed. 
            //* Calculation would happen again.
  const result = cubeNum(number) 
  */
  /* 
      //* useMemo has two things 
            //* 1) Callback function which has to have the value to be memoised
            //* 2) a dependency array
      */
  const result = useMemo(() => cubeNum(number), [number]);

  return (
    <div>
      <div className="flex flex-col text-center justify-between w-[35%] mx-auto my-4">
        <input
          type="number"
          placeholder="Enter Value"
          className="border-2 text-center"
          value={number > 0 ? number : "Enter Value"}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setNumber(Number(e.target.value))
          }
        />
        <h1>Value: {result}</h1>
      </div>

      <div className="flex flex-col text-center justify-between w-[35%] mx-auto my-4">
        <h1>{count}</h1>
        <button type="button" onClick={() => setCount(count + 1)}>
          INC
        </button>
      </div>
    </div>
  );
}
