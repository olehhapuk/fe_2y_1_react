import { useState, useEffect } from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  const [counter1, setCounter1] = useState(0);

  useEffect(() => {
    console.log('render');
  });

  useEffect(() => {
    console.log('first render');
  }, []);

  useEffect(() => {
    console.log('counter render');
  }, [counter]);

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <button onClick={() => setCounter1(counter1 + 1)}>Increment1</button>
    </div>
  );
}

export default App;
