import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
    //setCount((count)=> count + 1);   also okay(better in this case) using the callback syntax
  }

  return <button onClick={increment}>I have been clicked {count} times</button>;
}

export default Counter;
