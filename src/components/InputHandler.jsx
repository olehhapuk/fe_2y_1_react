import { useEffect, useState } from 'react';

function InputHandler() {
  const [input, setInput] = useState('');

  function handleKeyDown(e) {
    setInput(e.key);
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    console.log('input change ' + input);

    return () => {
      console.log('input return');
    };
  }, [input]);

  return (
    <div>
      <h4>InputHandler</h4>
      {input}
    </div>
  );
}

export default InputHandler;
