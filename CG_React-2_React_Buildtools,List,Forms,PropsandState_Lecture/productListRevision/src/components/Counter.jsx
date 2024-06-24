import { useState } from "react";

const Counter = ({ initialCount }) => {
  //   let count = 2; BEFORE STATE

  // variable(current_value_in_state) method_to_update_state = initial_value_state
  const [count, setCount] = useState(initialCount);

  const increase = () => {
    // count++; BEFORE STATE
    // wherever want to update value use method of state to expose
    setCount(count + 1);
    // console.log(count); // BEFORE STATE : changing value but not rending in UI because setState is async - VIMPPPPPPPPPPPPP
  };

  const decrease = () => {
    setCount(count - 1);
    // console.log(count); // BEFORE STATE :  changing value but not rending in UI
  };

  return (
    <div className="counter">
      {/* increase/decrease -> only pass function refernce  */}
      <button onClick={decrease}>-</button> <span>{count}</span>{" "}
      <button onClick={increase}>+</button>
    </div>
  );
};

export default Counter;
