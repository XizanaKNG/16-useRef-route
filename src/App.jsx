import { useState, useRef } from "react";
import "./App.css";

function App() {
  // let normalVar = 0; // ჩვეულებრივი ცვლადი

  const [click, setClick] = useState(0);

  const refVar = useRef(0);

  console.log(refVar);

  const handleClick = () => {
    // normalVar += 1; // გავზარდოთ ნორმალური ცვლადი
    refVar.current += 1;
    // setClick(click + 1);
    console.log("use Ref : ", refVar.current);
  };

  return (
    <>
      <div>
        <p>Button Clicked {click} Times</p>
        <p>Var Variable: {refVar.current}</p>
        <button onClick={handleClick}>Click me</button>
      </div>
    </>
  );
}

export default App;