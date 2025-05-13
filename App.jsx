import { useState } from 'react';
import './index.css';
import Chai from './Chai.jsx';

function App() {
  let content ;
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [counter, setCounter] = useState(0);

  function addValue() {
    const sum = parseInt(num1) + parseInt(num2);
    setCounter(sum);
  }

  const removeValue = () => {
    setCounter(counter - 1);
  };

  if(counter > 10){
    content=<Chai/>

  }
  else{
    content = <h1>Counter is less than 10</h1>
  }

  return (
    <div>
      <h1>Let's sum together</h1>

      <input
        type="number"
        placeholder="Enter number 1"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      /><br /><br />

      <input
        type="number"
        placeholder="Enter number 2"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      /><br /><br />

      <h3 className="heading">SUM IS: {counter}</h3>

      <button onClick={addValue}>Sum value</button><br /><br />
      <button onClick={removeValue}>Remove value</button>
      {content}
    </div>
  );
}

export default App;
