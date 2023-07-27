
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
        Calculator
        </h1>
        <div className='calculator'>

          <div className='screen'>
            69
          </div>
          <div className='off-screen'>
            <div className='qAC button'>AC</div>
            <div className='q+/- button'>+/-</div>
            <div className='q% button'>%</div>

            <div className='q/ button'>/</div>

            <div className='q1 button'>1</div>
            <div className='q2 button'>2</div>
            <div className='q3 button'>3</div>
            
            <div className='q* button'>*</div>
            
            <div className='q4 button'>4</div>
            <div className='q5 button'>5</div>
            <div className='q6 button'>6</div>
            
            <div className='q- button'>-</div>
            
            <div className='q7 button'>7</div>
            <div className='q8 button'>8</div>
            <div className='q9 button'>9</div>
            <div className='q+ button'>+</div>

            <div className='q0 button'>0</div>
            <div className='q. button'>.</div>
            
            <div className='q= button'>=</div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
