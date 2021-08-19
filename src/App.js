import React, { useState } from "react";

// can only use hooks inside of function components, not class components
// classes already ahve their own way to do same things that hooks do
// every time the component runs, the hooks must execute in the same exact order
// e.g., can't use hook in function, loop, or conditional statement (can't place hook inside of an 'if' check/statement)

// useState vs. class components state
// in class components, the state is set inside the constructor
// e.g., 4 would only ever be ran once
// with function component, the value of 4 gets called every time the function is ran

// useState has 2 ways to pass in state
//// 1) value
//// 2) function (not going to run multiple times)
//// function version is ideal for complex math functions (e.g., Fibonacci) so that the function is not being called every time state changes
//// helps with run time/efficiency

// useState deals with objects different

function countInitial() {
  console.log("run function");
  return 4;
}

function App() {
  // const arr = useState(4);
  // useState always returns an array with 2 values
  // 1) current state
  // 2) function to update the state
  // const [count, setCount] = useState(countInitial()); // runs every time
  // const [count, setCount] = useState(() => countInitial()); // runs only initially
  const [state, setState] = useState({ count: 4, theme: "blue" });
  const { count, theme } = state;

  function decrementCount() {
    // //setCount(count-1)
    // setCount((prevCount) => prevCount - 1);
    setState((prevState) => {
      return { ...prevState, count: prevState.count - 1 };
    });
    // when you decrement, theme disappears
    // not merging state like it would in a class component
    // actually is overwriting all of the prev state
    // if you want to use object, SPREAD prev state, then add changes

    // automatic merging doesn't happen bc when you use state inside of a hook
    // you would have multiple state hooks
    // e.g., const [count, setCount] = useState(4)
    // const [theme, setTheme] = useState('blue')
    // then the 2 different states would not be clashing

    // benefit of useState hooks: have 2 different hooks to manage 2 different states
    // multiple different pieces of state, broken down, more organized, easier to manage
  }

  function incrementCount() {
    // setCount((prevCount) => prevCount + 1);
    setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  }
  // when you update the state, the component re-renders

  return (
    <div className="App">
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={incrementCount}>+</button>
    </div>
  );
}

export default App;
