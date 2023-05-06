import { useState } from 'react';

import CounterActions from './CounterActions';
import CounterDisplay from './CounterDisplay';

const Counter = ({ initialValue, step }) => {
  const [value, setValue] = useState(initialValue);

  function handleDecrementClick() {
    // setValue((prevValue) => prevValue - step); // value = 0; prevValue = 0; newValue = -1
    // setValue((prevValue) => prevValue - step); // value = 0; prevValue = -1; newValue = -2
    // setValue((prevValue) => prevValue - step);
    // setValue((prevValue) => prevValue - step);
    // setValue((prevValue) => prevValue - step);

    setValue((prevValue) => prevValue - step);
  }

  function handleIncrementClick() {
    setValue((prevValue) => prevValue + step);
  }

  return (
    <div>
      <CounterDisplay counterValue={value} />
      <CounterActions
        onDecrement={handleDecrementClick}
        onIncrement={handleIncrementClick}
      />
    </div>
  );
};

export default Counter;
