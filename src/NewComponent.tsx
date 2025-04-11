import { useEffect, useState } from "react";

function NewComponent() {
  const [count, setCount] = useState(0);
  useEffect(() => console.log("mudou arrombado"), [count]);

  function add() {
    setCount((c) => c + 1);
  }

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={add}>Add</button>
    </>
  );
}

export default NewComponent;
