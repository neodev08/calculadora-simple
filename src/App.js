import { useState, useRef } from 'react';
import './App.css';

function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);

  function plus(e) {
    e.preventDefault();
    setResult((result) => result + Number(inputRef.current.value));
  }

  function minus(e) {
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value));
  }

  function times(e) {
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value));
  }

  function divide(e) {
    e.preventDefault();
    const value = Number(inputRef.current.value);
    if (value === 0){
      alert("Cannot be divided by zero");
      return;
    }
    setResult((result) => result / value);
  }

  function resetInput(e) {
    e.preventDefault();
    inputRef.current.value = '';
  }

  function resetResult(e) {
    e.preventDefault();
    setResult(0);
  }

  return (
    <div className='App'>
      <div>
        <h1>Simples Calculator</h1>
      </div>

      <form>
        <p ref={resultRef}><strong>Total:</strong>{result}</p>

        <input 
        pattern='[0-9]*'
        ref={inputRef}
        type='number'
        placeholder='Type a number'
        />

        <button onClick={plus}>add</button>
        <button onClick={minus}>minus</button>
        <button onClick={times}>multiply</button>
        <button onClick={divide}>divide</button>
        <button onClick={resetInput}>reset input</button>
        <button onClick={resetResult}>reset result</button>
      </form>
    </div>
  );
}

export default App;
