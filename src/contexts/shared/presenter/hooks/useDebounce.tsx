import { useState } from "react"

const useDebounce = () => {
  const [intervalId, setIntervalId] = useState<number | null>(null)
  return (func: () => void, wait: number) => {
    if (intervalId) clearTimeout(intervalId)
    setIntervalId(setTimeout(func, wait))
  };
};

export default useDebounce
