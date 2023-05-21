import { useEffect, useState } from 'react';

function Timer() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => {
      // Запускається перед розмонтуванням
      clearInterval(timerId);
    };
  }, []);

  useEffect(() => {
    console.log('time updated ' + time);
  }, [time]);

  // useEffect(() => {});

  return <div>{time}</div>;
}

export default Timer;
