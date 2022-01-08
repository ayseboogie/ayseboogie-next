import { useState, useEffect } from "react";

function getStorageValue(key, initialValue) {
  // getting stored value
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem(key);
    const initial = saved !== null ? JSON.parse(saved) : initialValue;
    return initial;
  }
}

export const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    return getStorageValue(key, initialValue);
  });

  useEffect(() => {
    // storing input name
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
