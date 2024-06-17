import { useState } from "react";
import "../App.css";
const Counter = () => {
  const [count, setCount] = useState(2);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };
  return (
    <div className="counter">
      <button onClick={decrease}>-</button>
      <span>{count}</span>
      <button onClick={increase}>+</button>
    </div>
  );
};

export default Counter;
