import { useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useDebounce = <T extends (...args: any[]) => void>() => {
  const [intervalId, setIntervalId] = useState<number | null>(null);

  return (func: T, wait: number) => {
    if (intervalId !== null) {
      clearTimeout(intervalId);
    }
    const id = window.setTimeout(() => {
      func();
    }, wait);
    setIntervalId(id);
  };
};

export default useDebounce;
