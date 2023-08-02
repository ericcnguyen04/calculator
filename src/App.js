import React, {useState} from 'react';
import './App.css';

function App() {

  // screen
  const [screenValue, setScreenValue] = useState(0);
  // previous value that is not on screen
  const [previousValue, setPreviousValue] = useState(null)

  const [operator, setOperator] = useState(null);
  const [shouldReset, setShouldReset] = useState(false);

// === !! === !! === //

  const handleNumberClick = number => {
    if (screenValue === 0 || shouldReset) {
      // change value of display screen, put up on screen
      setScreenValue(String(number))
      setShouldReset(false)
    } else {
      setScreenValue(screenValue + number)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>
        Calculator
        </h1>
        <div className='calculator'>

          <div className='screen'>
            {screenValue}
          </div>
          <div className='off-screen'>
            <div className='qAC button'>AC</div>
            <div className='q+/- button'>+/-</div>
            <div className='q% button'>%</div>

            <div className='q/ button'>/</div>

            <div className='q1 button' onClick={() => handleNumberClick(1)}>1</div>
            <div className='q2 button' onClick={() => handleNumberClick(2)}>2</div>
            <div className='q3 button' onClick={() => handleNumberClick(3)}>3</div>
            
            <div className='q* button'>*</div>
            
            <div className='q4 button' onClick={() => handleNumberClick(4)}>4</div>
            <div className='q5 button' onClick={() => handleNumberClick(5)}>5</div>
            <div className='q6 button' onClick={() => handleNumberClick(6)}>6</div>
            
            <div className='q- button'>-</div>
            
            <div className='q7 button' onClick={() => handleNumberClick(7)}>7</div>
            <div className='q8 button' onClick={() => handleNumberClick(8)}>8</div>
            <div className='q9 button' onClick={() => handleNumberClick(9)}>9</div>
            <div className='q+ button'>+</div>

            <div className='q0 button' onClick={() => handleNumberClick(0)}>0</div>
            <div className='q. button'>.</div>
            
            <div className='q= button'>=</div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
