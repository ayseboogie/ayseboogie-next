import { useEffect, useState } from "react";

const PREFIX = "codepen-clone-";

export default function useLocalStorage(key, initialValue) {
  const prefixedKey = PREFIX + key;
  let jsonValue;
  const [value, setValue] = useState(() => {
    if (window) {
      jsonValue = localStorage.getItem(prefixedKey);
      if (jsonValue != null) return JSON.parse(jsonValue);

      if (typeof initialValue === "function") {
        return initialValue();
      } else {
        return initialValue;
      }
    }
  });

  useEffect(() => {
    localStorage.setItem(prefixedKey, JSON.stringify(value));
  }, [prefixedKey, value]);

  return [value, setValue];
}
