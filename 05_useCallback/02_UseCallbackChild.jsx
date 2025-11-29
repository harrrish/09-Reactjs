//* Wrapping up the function inside memo will not get it re-rendered if there is no change in the component

import React from "react";

// Define the props type using an interface or type
interface UseCallbackChildProps {
  newFn: (value: unknown) => void;
}

const UseCallbackChild: React.FC<UseCallbackChildProps> = ({ newFn }) => {
  console.log("I'm a child component");

  return (
    <div>
      <h1 className="text-center">Child Component</h1>
    </div>
  );
};

export default React.memo(UseCallbackChild);
