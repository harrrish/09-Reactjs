import { useCallback, useState } from "react";
import UseCallbackChild from "./useCallbackChild";

export default function UseCallback() {
  const [count, setCount] = useState(0);

  const newFn = useCallback((): void => {}, []);
  /* If a dependency is passed then it will re-render the component it the dependency is changing 
  //* const newFn = useCallback((count): void => {}, [count]);
  */
  return (
    <div>
      <div className="flex flex-col text-center justify-between w-[35%] mx-auto my-4">
        <h1>{count}</h1>
        <button type="button" onClick={() => setCount(count + 1)}>
          INCREASE
        </button>
      </div>
      <UseCallbackChild newFn={newFn} />
    </div>
  );
}
