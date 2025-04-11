import { useState } from "react";

function Counter() {
  const [count, setCounter] = useState<number>(0);

  const add = () => {
    setCounter(count + 1);
  };

  const subtract = () => {
    setCounter(count - 1);
  };

  const reset = () => {
    setCounter(0);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={add}>Add</button>
      <button onClick={reset}>Reset</button>
      <button onClick={subtract}>Subtract</button>
    </div>
  );
}

export default Counter;
