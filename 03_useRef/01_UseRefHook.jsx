//*  Accessing DOM Elements:

import { useEffect, useRef, useState } from "react";

export default function UseRef() {
  const inputRef = useRef < HTMLInputElement > null;

  const [value, setValue] = (useState < string) | (undefined > "NO_VALUE");

  useEffect(() => {
    inputRef.current?.focus();
  }, [inputRef]);

  const handleClick = () => {
    const value = inputRef.current?.value;
    if (value?.trim()) {
      setValue(value);
    }
  };

  return (
    <div>
      <div className="w-1/2 mx-auto my-10">
        <input
          type="text"
          ref={inputRef}
          placeholder="Write something !!!"
          className="border-2 bg-sky-400 text-black placeholder:text-gray-500 w-3/4"
        />
        <button
          type="button"
          className="border-2 px-2 bg-black text-white"
          onClick={handleClick}
        >
          Click
        </button>
      </div>
      <div>
        <h1 className="text-center">{value}</h1>
      </div>
    </div>
  );
}
