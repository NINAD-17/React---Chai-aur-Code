import { useState } from "react";
import './App.css' 

function App() {
  let [counter, setCounter] = useState(0); // 15 is a default value that we gave. It can be anything.

  // let counter = 5;

  const addValue = () => {
    if(counter <= 15) {
      console.log({counter}, Math.random());
      counter = counter + 1;
      setCounter(counter);
    }
  }

  const removeValue = () => {
    if(counter > 0) {
      console.log({counter}, Math.random());
      setCounter(counter - 1);
    }
  }

  return (
    <>
      <h1>Hello React!</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
    </>
  )
}

export default App
