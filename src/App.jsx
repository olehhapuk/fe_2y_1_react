import { useState } from 'react';

import CounterActions from './components/CounterActions';

function App() {
  const [counterValue, setCounterValue] = useState(0);
  const [step, setStep] = useState(5);

  function increment(step) {
    setCounterValue((prevCounterValue) => prevCounterValue + step);
  }

  return (
    <div>
      <p>{counterValue}</p>
      <CounterActions increment={increment} />
    </div>
  );
}

export default App;
