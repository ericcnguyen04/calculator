import React, {useState} from 'react';
import './App.css';

function App() {

  // screen
  const [screenValue, setScreenValue] = useState(0);
  // previous value that is not on screen
  const [previousValue, setPreviousValue] = useState(null)
  // operator usage
  const [operator, setOperator] = useState(null);
  const [shouldReset, setShouldReset] = useState(false);

// === !! === !! === // //

  // click inputs
  const handleNumberClick = (number) => {
    if (screenValue === 0 || shouldReset) {
      // change value of display screen, put up on screen
      setScreenValue(String(number))
      setShouldReset(false)
    } else {
      setScreenValue(screenValue + number)
    }
  }

  // clear inputs
  const handleClearCalculator = () => {
    setScreenValue(0)
    setPreviousValue("null")
    setOperator(null)
    setShouldReset(false)
  }

  // click operators
  const handleOperator = (op) => {
    if (operator) { // if there is an operator, it will automatically calculate
      handleMath() 
      // console.log('this si the answer')

      // after calculation, set previous variable the same as current to create a chain calculation
      // setPreviousValue(screenValue)
    } 
    setOperator(op)
    setPreviousValue(screenValue)
    setShouldReset(true) // allows input when screen value is not 0
    console.log(op)
  }

  // math
  const handleMath = () => {
    // obtain the two values
    const prev = parseFloat(previousValue)
    const current = parseFloat(screenValue)

    // create a switch case of all operators
    switch (operator) {
      case "+":
        setScreenValue(prev + current)
        break
      case "-":
        setScreenValue(prev - current)
        break
      case "*":
        setScreenValue(prev * current)
        break
      case "/":
        setScreenValue(prev / current)
        break
      default:
        break
    }

    // reset the operator and previous value after calculating
    setOperator(null)
    setPreviousValue(null)
  }

  // equal sign
  const handleEqual = () => {
    // make the equation
    handleMath()

    // needed for consistent functionality
    // setOperator(op);
    setPreviousValue(screenValue);

    // be able to continue calculations when screen doesnt say 0
    setShouldReset(true)
  }

  const handlePercentage = () => {
    // take the current value and place it into decimal
    setScreenValue(screenValue / 100)
  }

  const handleMakeNegative = () => {
    // multiply by number by -1 to toggle negative
    setScreenValue(screenValue * -1)
  }

  // make display negative

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
            <div className='qAC button' onClick={() => handleClearCalculator()}>AC</div>
            <div className='q+/- button' onClick={() => handleMakeNegative()}>+/-</div>
            <div className='q% button' onClick={() => handlePercentage()}>%</div>

            <div className='q/ button' onClick={() => handleOperator('/')}>/</div>

            <div className='q1 button' onClick={() => handleNumberClick(1)}>1</div>
            <div className='q2 button' onClick={() => handleNumberClick(2)}>2</div>
            <div className='q3 button' onClick={() => handleNumberClick(3)}>3</div>
            
            <div className='q* button' onClick={() => handleOperator('*')}>*</div>
            
            <div className='q4 button' onClick={() => handleNumberClick(4)}>4</div>
            <div className='q5 button' onClick={() => handleNumberClick(5)}>5</div>
            <div className='q6 button' onClick={() => handleNumberClick(6)}>6</div>
            
            <div className='q- button' onClick={() => handleOperator('-')}>-</div>
            
            <div className='q7 button' onClick={() => handleNumberClick(7)}>7</div>
            <div className='q8 button' onClick={() => handleNumberClick(8)}>8</div>
            <div className='q9 button' onClick={() => handleNumberClick(9)}>9</div>
            <div className='q+ button' onClick={() => handleOperator('+')}>+</div>

            <div className='q0 button' onClick={() => handleNumberClick(0)}>0</div>
            <div className='q. button' onClick={() => handleNumberClick('.')}>.</div>
            
            <div className='q= button' onClick={() => handleEqual()}>=</div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
