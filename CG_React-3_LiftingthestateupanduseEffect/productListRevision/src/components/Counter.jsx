import { useState, useEffect } from "react";

const Counter = ({ initialCount }) => {
  //   let count = 2; BEFORE STATE

  // variable(current_value_in_state) method_to_update_state = initial_value_state
  const [count, setCount] = useState(initialCount);

  const increase = () => {
    // count++; BEFORE STATE
    // wherever want to update value use method of state to expose
    // console.log("Before : ", count);
    // // Execute only ONCE as count value was 1 and update it to 2
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // console.log("After : ", count);
    // console.log(count); // BEFORE STATE : changing value but not rending in UI because setState is async - VIMPPPPPPPPPPPPP

    console.log("Before : ", count);
    // Execute each function as it maintrains previousValue and update it to previousValue + 1
    setCount((prevVal) => {
      return prevVal + 1; // count+1 always
    });
    setCount((prevVal) => {
      return prevVal + 1; // count+1 always
    });
    setCount((prevVal) => {
      return prevVal + 1; // count+1 always
    });
    setCount((prevVal) => {
      return prevVal + 1; // count+1 always
    });
    setCount((prevVal) => {
      return prevVal + 1; // count+1 always
    });
    console.log("After : ", count);
    // console.log(count); // BEFORE STATE : changing value but not rending in UI because setState is async - VIMPPPPPPPPPPPPP
  };

  const decrease = () => {
    setCount(count - 1);
    // console.log(count); // BEFORE STATE :  changing value but not rending in UI
  };

  useEffect(() => {
    //Mount : Component Birth Phase : dependency - if empty array ([]) : ComponentDidMount Phase : Syntax : { useEffect(() => { console.log("Mount"); }, []) }
    console.log("Birth OR Mount Phase");
  }, []);

  useEffect(() => {
    // Update : Component Update Phase : dependency - if you pass nothing OR some elements like [a,b,c] : ComponentDidUpdate Phase : Syntax : { useEffect(() => { console.log("Update"); }, [a,b,c] OR noting) }
    console.log("Update Phase", count);
  });

  useEffect(() => {
    // UnMount : Component Die Phase : when function returns something : Syntax : { useEffect(() => { console.log("Mount"); return () => {console.log("UnMount");}}, [a,b,c] OR noting) }
    // console.log("Mount Phase");
    return () => {
      console.log("Die OR UnMount Phase");
    };
  }, []);

  return (
    <div className="counter">
      {/* increase/decrease -> only pass function refernce  */}
      <button onClick={decrease}>-</button> <span>{count}</span>{" "}
      <button onClick={increase}>+</button>
    </div>
  );
};

export default Counter;
