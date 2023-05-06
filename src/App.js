import { useState } from "react";
import "./App.css";
import Button from "./components/button/Button";
import Input from "./components/input/Input";
import * as math from "mathjs";

function App() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");
  const addToText = (val) => {
    setText((text) => [...text, val + " "]);
  };
  const resetInput = () => {
    setText("");
    setResult("");
  };
  const calculeteResult = () => {
    const input = text.join("");
    setResult(math.evaluate(input));
  };
  return (
    <div className="App">
      <div className="calc-wrapper">
        <Input text={text} result={result} />
        <div className="row">
          <Button symbol="7" handleClick={addToText} />
          <Button symbol="8" handleClick={addToText} />
          <Button symbol="9" handleClick={addToText} />
          <Button symbol="/" color="#00AD85" handleClick={addToText} />
        </div>
        <div className="row">
          <Button symbol="4" handleClick={addToText} />
          <Button symbol="5" handleClick={addToText} />
          <Button symbol="6" handleClick={addToText} />
          <Button symbol="*" color="#00AD85" handleClick={addToText} />
        </div>
        <div className="row">
          <Button symbol="1" handleClick={addToText} />
          <Button symbol="2" handleClick={addToText} />
          <Button symbol="3" handleClick={addToText} />
          <Button symbol="+" color="#00AD85" handleClick={addToText} />
        </div>
        <div className="row">
          <Button symbol="0" handleClick={addToText} />
          <Button symbol="." handleClick={addToText} />
          <Button symbol="=" handleClick={calculeteResult} />
          <Button symbol="-" color="#00AD85" handleClick={addToText} />
        </div>
        <Button symbol="Clear" color="darkBlue" handleClick={resetInput} />
      </div>
    </div>
  );
}

export default App;
