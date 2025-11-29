import { useEffect, useState } from "react";

export default function useLocalStorageHook(
  key: string,
  iniVal: string,
): [string, (value: string) => void] {
  // Retrieve the value from localStorage, falling back to iniVal if null
  const storedValue = localStorage.getItem(key);
  const initialVal = storedValue ? storedValue : iniVal;

  const [name, setName] = useState < string > initialVal;

  useEffect(() => {
    // Update localStorage whenever the 'name' state changes
    localStorage.setItem(key, name);
  }, [name, key]); // Dependency array includes both 'name' and 'key'

  return [name, setName];
}
